import { SelectionScaleService } from 'app/features/selection-scale';
import { ToasterService } from './toaster.service';
// TODO: Improvement of coding style :
// TODO: leaving one empty line between third party imports and application imports
// TODO: listing import lines alphabetized by the module
import { Injectable } from '@angular/core';

import { LoaderService } from './loader.service';
import { MailService } from './../../features/feedback/mail.service';
import { SummaryResultService } from './../../features/summary-result/summary-result.service';
import { NavigationBarService } from './../../pages/nav/service/navigation-bar.service';
import { Logger } from './logger.service';
import { SidePanelService } from './../../features/side-panel/side-panel.service';
import { SelectionToolButtonStateService } from 'app/features/selection-tools';
import {APIService, Dictionary} from 'app/shared';
import { LayersService } from 'app/features/layers';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subject } from 'rxjs/Subject';
import { HeatLoadAggregateService } from '../../features/graph/heat-load/heat-load.service';
import {ExportDataService} from '../../features/export-data/service/export-data.service';
import { DurationCurveService } from '../../features/graph/duration-curve/duration-curve.service';
import { DataInteractionService } from '../../features/layers-interaction/layers-interaction.service';
import {ElectricityMixService} from '../../features/graph/electricity-mix/service/electricity-mix.service';
import { CalculationHeatLoadDividedService } from './../../features/calculation-module/service/calculation-test.service';
import { CalculationModuleService } from './../../features/calculation-module/service/calculation-module.service';
import { CalculationModuleStatusService } from 'app/features/calculation-module/service/calcultation-module-status.service';

@Injectable()
export class InteractionService  {
    private summaryResultState = false;
    private electricityGenerationResultState = false;

    private currentCMiD = null;
    private cmRunning = false;

    private cmRunningProgess = 0;
    constructor(private logger: Logger,
        private sidePanelService: SidePanelService,
        private toasterService: ToasterService,
        private navigationBarService: NavigationBarService,
        private summaryResultService: SummaryResultService,
        private layerService: LayersService, private exportDataService: ExportDataService,
        private heatLoadAggregateService: HeatLoadAggregateService,
        private durationCurveService: DurationCurveService,
        private dataInteractionService: DataInteractionService, private electricityMixService: ElectricityMixService,
        private calculationModuleStatusService: CalculationModuleStatusService,
        private calculationModuleService: CalculationModuleService,
        private calculationHeatLoadDividedService: CalculationHeatLoadDividedService,
        private selectionScaleService:SelectionScaleService

    ) { }
    getScaleLevel() {
      return this.selectionScaleService.getScaleValue();
    }
    showToaster(msg) {
      this.toasterService.showToaster(msg);
    }
    getLayerArray(): Dictionary {
        return this.layerService.getLayerArray()
    }
/*     setLoadingLayerInterraction(layer) {
      this.dataInteractionService.setLoadingLayerInterraction(layer)
    }
    unsetLoadingLayerInterraction(layer) {
      this.dataInteractionService.unsetLoadingLayerInterraction(layer)

    } */
    // interface for export data service

    setSummaryResultState(val: boolean) {
      this.summaryResultState = val;
    }
    setElectricityGenerationMixResultState(val: boolean) {
      this.electricityGenerationResultState = val;
    }
    getElectricityGenerationMixResultState(): boolean {
      return this.electricityGenerationResultState ;
    }
    getSummaryResultState() {
      return this.summaryResultState;
    }

    enableStateOpenWithFunction(functionString: string) {
        this.navigationBarService.enableOpenStateWithFunction(functionString)
    }
    disableStateOpenWithFunction(functionString: string) {
        this.navigationBarService.disableOpenStateWithFunction(functionString)
    }
    enableButtonWithId(buttonString: string) {
        this.navigationBarService.enableButton(buttonString);
    }
    disableButtonWithId(buttonString: string) {
        this.navigationBarService.disableButton(buttonString);
    }
    disableAllButtonsWithFunction(functionString: string) {
        this.navigationBarService.disableButton(functionString);
    }
    enableAllButtonsWithFunction(functionString: string) {
        this.navigationBarService.enableButtons(functionString);
    }
    // RIGHT PANEL
    openRightPanel() {
        this.sidePanelService.openRightPanel();
    }
    openTopPanel() {
      this.sidePanelService.topPanelexpandedCollapsed();
    }
    closeTopPanel() {
      this.logger.log('InteractionService/closeTopPanel');
      this.sidePanelService.topPanelexpandedCollapsed();
    }
    closeRightPanel() {
      this.sidePanelService.closeRightPanel();
    }
    disableRightPanel() {
      this.sidePanelService.closeRightPanel();
      this.disableButtonWithId('load_result');
      this.disableStateOpenWithFunction('right');
    }


    // Folder Panel
    actionFolderPanel(toOpen: boolean = false) {
      if (toOpen) this.closeSavePanel();
      this.sidePanelService.setFolderPanelStatus(toOpen);
      this.navigationBarService.getButtonWithId('folder').stateOpen = toOpen;
    }
    openFolderPanel() {
      this.actionFolderPanel(true);
    }
    closeFolderPanel() {
      this.actionFolderPanel(false);
    }

    // Save Panel
    actionSavePanel(toOpen: boolean = false) {
      if (toOpen) this.closeFolderPanel();
      this.sidePanelService.setSavePanelStatus(toOpen);
      this.navigationBarService.getButtonWithId('save').stateOpen = toOpen;
    }
    openSavePanel() {
      this.actionSavePanel(true);
    }
    closeSavePanel() {
      this.actionSavePanel(false);
    }

    // LEFT PANEL
    openLeftPanel() {
        this.sidePanelService.openLeftPanel();
    }
    closeLeftPanel() {
        this.sidePanelService.closeLeftPanel();
    }
    disableLeftPanel() {
        this.sidePanelService.closeLeftPanel();
    }
    getNavButtons() {
        return this.navigationBarService.getButtons();
    }

    getSummaryResultWithIds(payload): Promise<any> {
      return this.summaryResultService.getSummaryResultWithIds(payload);
    }
    getSummaryResultWithMultiAreas(payload: any): Promise<any> {
      return this.summaryResultService.getSummaryResultWithMultiAreas(payload);
    }
    getSummaryPersonnalLayers(payload) {
      return this.summaryResultService.getSummaryResultPersonnalLayers(payload)
    }
    getHeatLoad(payload, type_api_ref, isHectare): Promise<any>{
        return this.heatLoadAggregateService.getHeatLoad(payload, type_api_ref, isHectare);
    }
    getHeatLoadData() {
      return this.heatLoadAggregateService.getHeatLoadData()
    }
    setHeatLoadData(data) {
      return this.heatLoadAggregateService.setHeatLoadData(data)
    }
    formatHeatLoadForChartjs(data, api_ref){
        return this.heatLoadAggregateService.formatHeatLoadForChartjs(data, api_ref);
    }
    getDurationCurveWithPayload(payload, isHectare): Promise<any>{
        return this.durationCurveService.getDurationCurveWithPayload(payload, isHectare);
    }
    transformDurationCurveData(data){
        return this.durationCurveService.transformData(data);
    }
    getDefaultDatasetDurationCurve() {
      return this.durationCurveService.getDefaultDatasetDurationCurve();

    }
    getSplittedResults(results){
        return this.dataInteractionService.getSplittedResults(results);
    }
    getChien(r) {
        return this.dataInteractionService.getSplittedResults(r);
    }

    getElectricityMix(payload): Promise<any> {
    return this.electricityMixService.getElectricityMix(payload);
    }
    enableOpenStateWithId(id) {
        this.navigationBarService.enableOpenStateWithId(id);
    }
    disableOpenStateWithId(id) {
      this.navigationBarService.disableOpenStateWithId(id);
    }
    getCMResult(summaryResult, cm): Promise<any> {
      return this.calculationHeatLoadDividedService.getCMResult(summaryResult, cm)
    }

    setCMResult(summaryResult, cm): Promise<any> {
      return this.calculationHeatLoadDividedService.getCMResult(summaryResult, cm)
    }
    getCMInformations(payload): Promise<any> {
      return this.calculationModuleService.getCMInformations(payload)
    }
    getStatusAndCMResult(id): Promise<any> {


      return this.calculationModuleService.getStatusOfCM(id)
    }
    /* getCMResultMockData() {
      return this.calculationModuleService.getCMResultMockData()

    } */
    getCMRunned() {
      return this.calculationModuleStatusService.getCmRunned()
    }
    setStatusCMPanel(value) {
      return this.calculationModuleStatusService.setStatusCMPanel(value)
    }
    setCMAnimationStatus(value) {
      this.calculationModuleStatusService.setCmAnimationStatus(value);
    }

    getCMAnimationStatus() {
      this.calculationModuleStatusService.getCmAnimationStatus();
    }
    undefinedCmRunned() {
      this.calculationModuleStatusService.undefinedCmRunned()
    }
    deleteCM(id) {
      return this.calculationModuleService.deleteCM(id)
    }

    getCmRunning() {
      return this.calculationModuleStatusService.getRuningState()
    }
    setCmRunning(cmRunning) {
      this.calculationModuleStatusService.setRuningState(cmRunning)
    }

    getCurrentIdCM() {
      return this.currentCMiD
    }
    setCurrentIdCM(currentCMiD) {
      this.currentCMiD = currentCMiD
    }

    getcmRunningProgess() {
      return this.cmRunningProgess
    }
    setCmRunningProgess(cmRunningProgess) {
      this.cmRunningProgess = cmRunningProgess
    }


  getStatusCMPanel(){
    return this.calculationModuleStatusService.getStatusCMPanel();

  }
  deleteCMTask() {
    

      if (this.getcmRunningProgess() >0 && this.currentCMiD != null){

        const currentCMiD = this.currentCMiD
        this.setCurrentIdCM (null)
        return this.calculationModuleService.deleteCM(currentCMiD).toPromise().then( response => {
          this.logger.log('CMMMMM REMOVEEEED')
          this.currentCMiD = null
          })
          .catch(() => {});


      }

      if (this.getStatusCMPanel().value == true){

        this.setStatusCMPanel(false)

      }
    }
}
