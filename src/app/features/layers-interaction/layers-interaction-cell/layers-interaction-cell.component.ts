import { calculation_module_category, layers_order } from './../../../shared/data.service';
// Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
import { LayersService } from './../../layers/services/layers.service';
import {
  Component,
  OnInit,
  Input,
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/core';

import { MapService } from '../../../pages/map/map.service'
import { DataInteractionClass } from '../layers-interaction.class';
import { LoaderService } from '../../../shared/services/loader.service';
import { InteractionService } from '../../../shared/services/interaction.service';
import { geoserverUrl, urlLegend } from "../../../shared/data.service";
@Component({
  moduleId: module.id,
  selector: 'layers-interaction-cell',
  templateUrl: 'layers-interaction-cell.component.html',
  styleUrls: ['layers-interaction-cell.component.css'],
  animations: [
    // Define an animation that adjusts the opactiy when a new item is created
    //  in the DOM. We use the 'visible' string as the hard-coded value in the
    //  trigger.
    //
    // When an item is added we wait for 300ms, and then increase the opacity to 1
    //  over a 200ms time interval. When the item is removed we don't delay anything
    //  and use a 200ms interval.
    //
    trigger('visibleTrigger', [
      state('visible', style({ opacity: '1' })),
      transition('void => *', [style({ opacity: '0' }), animate('200ms 300ms')]),
      transition('* => void', [animate('200ms', style({ opacity: '0' }))])
    ])
  ]
})
export class DataInteractionCellComponent implements OnInit {
  @Input() dataInteraction: DataInteractionClass;
  @Input() expanded: boolean;
  private loading = true;

  private cm_cat = calculation_module_category;
  constructor(private mapService: MapService, private interactionService: InteractionService) { }
  ngOnInit() {
  }
  endLoad() {
    this.loading = false;
  }
  showRemoveLayer(e) {
    if (this.interactionService.getSummaryResultState() === false) {
      this.dataInteraction.isSelected = !this.dataInteraction.isSelected;
      if (this.dataInteraction.category === calculation_module_category) {
        this.mapService.displayCustomLayerFromCM(this.dataInteraction.cm_id, this.dataInteraction.type_of_layer)
      } else {
        let order = layers_order;
        if (this.dataInteraction.order) {
          order = this.dataInteraction.order
        }
        this.mapService.showOrRemoveLayer(this.dataInteraction.workspaceName, order);
        if (this.dataInteraction.zoomLevel > 0) {
          this.mapService.checkZoomLevelLayer(this.dataInteraction.workspaceName, this.dataInteraction.zoomLevel)
        }
        this.mapService.setLayersSubject()
      }
    }
  }
  getIdSubtringing(id) {
    return id.substring(0, 5)
  }
}
