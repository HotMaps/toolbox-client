export class DataInteractionClass {
  id: number;
  name: string;
  category: string;
  isSelected: boolean;
  workspaceName: string;
  zoomLevel: number;
  styleName: string;
  ref: any[];
  layer_type: string;
  cm_id?: string;
  download_url?: string;
  info_url?: string;
  type_of_layer?: string;
  description?: string;
  custom_symbology?: any;
  isLoading:boolean;
  order?:number;
  year?:number;
  schema?:string;
  dataType?:string;
  layerName?:string;
  scales?:string[];
}
