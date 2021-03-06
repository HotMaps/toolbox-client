import { basemap } from './../pages/map/basemap';
import { environment } from './../../environments/environment';

import 'leaflet-draw';

/**
 * Created by lesly on 07.07.17.
 */

 // Improvement of coding style :
// leaving one empty line between third party imports and application imports
// listing import lines alphabetized by the module
export const apiUrl = environment.apiUrl;
export const geoserverUrl = environment.geoserverUrl;
export const hotmaps_wiki = environment.wikiUrl;

export const geocodeUrl    = 'https://nominatim.openstreetmap.org/search?q=';    // prefer
export const getIpUrl    = 'https://ipv4.myexternalip.com/json';    // prefer
export const getLocationFromIp    = 'http://hotmaps.hevs.ch:9005/api/';

export const defaultLayer = 'heat_tot_curr_density';
export const styleNameHeat = 'heat_tot_curr_density';
export const heat_type = 'heat';
export const defaultLayerType = heat_type;

export const idDefaultLayer = 0;
export const maxSurfaceValueCM = 640000;
export const wwtpLayerName   = 'wwtp';

export const urlTaigaFeedback = 'http://hotmaps.hevs.ch:8585/feedback-taiga/send-taiga-issue.php';
export const urlLegend = geoserverUrl + '?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=50&HEIGHT=10&STRICT=false&style=';
export const timeOutAjaxRequest = 10000;
export const unit_heatload_profil = 'MW';

export const formatImage = 'image/png8';
// layer_name
export const geoserverGetFeatureInfoUrl = geoserverUrl + '?' +
  'SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&FORMAT=image/png&TRANSPARENT=true&QUERY_LAYERS=hotmaps:';
export const nuts_level   = '3';
export const populationLayerName = 'pop_tot_curr_density'
export const postStatsLayersHectares = '/stats/layers/hectares';
export const postStatsPersonalLayer = '/stats/personnal-layers';

export const postStatsLayersNutsLau = '/stats/layers/nuts-lau';
export const postHeatLoadProfileHectares = '/heat-load-profile/hectares';
export const postHeatLoadProfileNutsLau = '/heat-load-profile/nuts-lau';
export const postDurationCurveHectares = '/heat-load-profile/duration-curve/hectares';
export const postDurationCurveNutsLau = '/heat-load-profile/duration-curve/nuts-lau';
export const getElectricityMixFromNuts0 = '/stats/energy-mix/nuts-lau';


// User management endpoints
export const user_endpoint = '/users/';
export const upload_endpoint = '/upload/';
export const post_user_register = user_endpoint + 'register';
export const post_user_register_activate = user_endpoint + 'register/activate';
export const post_user_recovery_ask = user_endpoint + 'recovery/ask';
export const post_user_recovery = user_endpoint + 'recovery';
export const post_user_logout = user_endpoint + 'logout';
export const post_user_login = user_endpoint + 'login';
export const get_userinformation_endpoint = user_endpoint + 'information';
export const get_userupdateprofile_endpoint = user_endpoint + 'profile/update';
export const get_diskspace_endpoint = user_endpoint + 'space_used';

export const get_filelist_endpoint = upload_endpoint + 'list';


// title
export const heatloadprofile = 'Heatload profile';
export const Durationcurve = 'Duration curve';
export const energy_mix_title = 'Electricity generation mix';
export const set404url   = 'set404url';

// Projection data string
export const proj3035 = '+proj=laea +lat_0=52 +lon_0=10 +x_0=43f21000 +y_0=3210000 +ellps=GRS80 +units=m +no_defs';
export const proj4326 = '+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs';

// Heat load profil
export const heat_load_api_day = 'day';
export const heat_load_api_year = 'year';
export const heat_load_api_month = 'month';
export const buttons_heat_load = [
  { name: 'Year', api_ref: heat_load_api_year, selected: true, date: 2010, min: 2010, max: 2010, options: [] },
  { name: 'Month', api_ref: heat_load_api_month, selected: false, date: 1, min: 1, max: 12, options: [] },
  { name: 'Day', api_ref: heat_load_api_day, selected: false, date: 1, min: 1, max: 31, options: [] },
];
export const default_drop_down_button = 'overall';
export const calculation_module_category = 'Calculation module';
export const raster_type_name = 'raster';
export const vector_type_name = 'vector';
export const summay_drop_down_buttons = [
  { name: 'Overall', ref: default_drop_down_button, selected: true, display: false},
  { name: 'Demand', ref: 'demand', selected: false, display: false},
  { name: 'Potentials', ref: 'potential', selected: false, display: false},
  { name: 'Climate', ref: 'climate', selected: false, display: false},
  { name: 'Buildings', ref: 'buildings', selected: false, display: false},
  { name: 'Heat Supply', ref: 'heat_supply', selected: false, display: false},
  { name: 'Industry', ref: 'industry', selected: false, display: false},
  { name: 'Electricity', ref: 'electricity', selected: false, display: false},
  { name: 'Calculation module', ref: calculation_module_category, selected: false, display: false}
]
// Layer order number
/*
  More the number is big, more hight is the layer on the toolbox
*/
export const industry_layer_order = 6;
export const scale_layer_order = 5;
export const cm_layers_order = 4;
export const layers_order = 3;
export const maps_order = 1;

// layers constant
export const timeOut   = 200000;
// layers constant
export const clickAccuracy   = 100;
export const zoomLevelDetectChange = 10;
export const constant_year = 2012;
export const constant_year_sp_wwtp = 2015;
export const constant_year_duration_curve = 2010;
export const business_name_wwtp = 'Waste Water treatment plants';
export const business_name_population = 'Population';
export const unit_capacity   = 'population equivalent';
export const unit_heat_density   = 'MWh/ha';
export const unit_shape_area   = 'm2';
export const unit_population   = 'person/ha';
export const round_value   = '1.2-2';
export const defaultZoomLevel = 5;
export const map_options =  {
  zoomControl: false,
  center: L.latLng(47.33249406663852, 0.6976318359375),
  zoom: defaultZoomLevel,
  minZoom: 4,
  maxZoom: 17,
  zoomAnimationThreshold: 3,
  layers: [basemap.Esri ]
}
export const lau2name = 'tbl_lau1_2';

// Scale Value
export const nuts0  = 'NUTS 0';
export const nuts1  = 'NUTS 1';
export const nuts2  = 'NUTS 2';
export const nuts3  = 'NUTS 3';
export const lau2   = 'LAU 2';
export const hectare= 'Hectare';
export const initial_scale_value = nuts2;

// Event variable
export const MAPDRAWEDITED = L.Draw.Event.EDITED;
export const MAPDRAWSTART = L.Draw.Event.DRAWSTART;
export const MAPDRAWDELETED = L.Draw.Event.DELETED;
export const MAPDRAWEDITSTOP = L.Draw.Event.EDITSTOP;
export const MAPDRAWEDITSTART = L.Draw.Event.EDITSTART;
export const MAPDRAWCREATED = L.Draw.Event.CREATED;
export const MAPCLICK = 'click';
export const MAPLAYERCHANCE = 'baselayerchange';
export const MAPZOOMSTART = 'zoomstart';
export const MAPZOOMEND = 'zoomend';
export const MAPLAYERSCONTROLEVENT = 'LayersControlEvent';
export const MAPLAYERADD = 'layeradd';
export const MAPDIDIUPDATELAYER = 'didUpdateLayers';
export const MAPOVERLAYADD = 'overlayadd';

export const rightPanelSize = 600;
export const leftPanelSize = 400;

// tab values
export const default_tab_datapanel = 'indicator';
export const tab1_datapanel = default_tab_datapanel;
export const tab2_datapanel = 'charts';

export const eu_logo_path = '/assets/first-page/co-funded-h2020-horiz_en.png'
export const eu_logo_height = 70

// Duration curve graph data
export const duration_curve_graph_title = 'Duration curve';
export const duration_curve_graph_category = 'duration_curve';

export const duration_curve_graph_options = {
    legend: {
        display: false
    },
    /* elements:{
      point:{
        radius:0
      }
    }, */
    tooltips: {enabled: false},
    hover: {mode: null},
    scales:{
          yAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Heat Power (MW)'
            }
          }],
          xAxes: [{
            ticks: {display: false},
            scaleLabel: {
              display: true,
              labelString: 'Yearly duration'
            },
            gridLines:{
              color: "#FFFFFF"
            }
          }]
    }
};

// Heat Load graph data
export const heat_load_graph_options = {
      scales:{
            yAxes: [{
              scaleLabel: {
                display: true,
                labelString: 'Heat Power (MW)'
              }
            }]
      }
  };
export const energy_mix_graph_category = 'energy_mix';
export const energy_mix_options = {
  position : 'right',
  responsive: true,
  legend: {
    display: true,
    position : 'right'
  }
};
export const clculation_module_graph_options = {
  scales:{
        yAxes: [{
          scaleLabel: {
            display: true,
            labelString: ''
          }
        }],
        xAxes: [{
          scaleLabel : {
            display: true,
            labelString: ''
          }
        }]
  }
};

export const default_color_shpfile = '#FFA500'
export const default_fillColor_shpfile = '#FFA500'
export const default_fillOpacity_shpfile = 0.5

export const color_usedspace = '#bf2630';
export const color_unusedspace = '#26bf3d';
export const labels_diskspacechart = ['Used space', 'Unused space'];
export const diskspacechart_options = {
  responsive: true,
  maintainAspectRatio: false,
  legend: {
    display: true,
  },
  tooltips: {
    callbacks: {
      label: function(tlt, data){
        return data.labels[tlt.index] + ': ' + data.datasets[0].data[tlt.index] + ' MB'
      }
    }
  }
};


export const inputs_categories = [
  {id: '0', name: 'Inputs', contains_component: false},
  {id: '1', name: 'Basic inputs', contains_component: false},
  {id: '2', name: 'Advanced inputs: (Level 1)', contains_component: false},
  {id: '3', name: 'Advanced inputs: (Level 2)', contains_component: false},
  {id: '4', name: 'Advanced inputs: (Level 3)', contains_component: false},
];

