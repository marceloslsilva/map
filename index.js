/////////////////////////////////////////////////////////////////////////////


// Name of the top-level file which contains the GeoJSON data for each site
var muralDataFile = 'murals';
var studiosDataFile = 'studios';
var treeDataFile = 'tree';
var acerpDataFile = 'acerp';
var acerplDataFile = 'acerpl';
var acerpsDataFile = 'acerps';
var acersaDataFile = 'acersa';
var aesculusDataFile = 'aesculus';
var abateDataFile = 'abate';
var semDataFile = 'sem';
var alnus_glutinosaDataFile = 'alnus_glutinosa';
var arbutus_unedoDataFile = 'arbutus_unedo';
var betula_pubescensDataFile = 'betula_pubescens';
var bosquetede_deSalix_capreaDataFile = 'bosquetede_deSalix_caprea';
var camelliaDataFile = 'camellia';
var carpinus_betulusDataFile = 'carpinus_betulus';
var catalpa_bignonioidesDataFile = 'catalpa_bignonioides';
var cedrus_atlanticaDataFile = 'cedrus_atlantica';
var celtis_australisDataFile = 'celtis_australis';
var cercis_siliquastrumDataFile = 'cercis_siliquastrum';
var cordyline_australisDataFile = 'cordyline_australis';
var corylus_avellanaDataFile = 'corylus_avellana';
var cryptomeria_japonicaDataFile = 'cryptomeria_japonica';
var cupressus_sempervirensDataFile = 'cupressus_sempervirens';
var diospyros_virginianaDataFile = 'diospyros_virginiana';
var fagus_sylvaticaDataFile = 'fagus_sylvatica';
var fraxinus_angustifoliaDataFile = 'fraxinus_angustifolia';
var grevillea_robustaDataFile = 'grevillea_robusta';
var ilex_aquifoliumDataFile = 'ilex_aquifoliuma';
var juglans_regiaDataFile = 'juglans_regia';
var lagoestremia_indicaDataFile = 'lagoestremia_indica';
var laurus_nobilisDataFile = 'laurus_nobilis';
var ligustrum_lucidumDataFile = 'ligustrum_lucidum';
var liquidambar_styracifluaDataFile = 'liquidambar_styraciflua';
var liriodendron_tulipiferaDataFile = 'liriodendron_tulipifera';
var macieira_silvesteDataFile = 'macieira_silveste';
var magnoliaDataFile = 'magnolia';
var magnolia_acuminataDataFile = 'magnolia_acuminata';
var magnolia_lilifloraDataFile = 'magnolia_liliflora';
var magnolia_soulangeanaDataFile = 'magnolia_soulangeana';
var malus_domesticaDataFile = 'malus_domestica';
var melia_azedarachDataFile = 'melia_azedarach';
var olea_europaeaDataFile = 'olea_europaea';
var picea_abiesDataFile = 'picea_abies';
var pinus_pineaDataFile = 'pinus_pinea';
var pittosporum_tobiraDataFile = 'pittosporum_tobira';
var platanus_x_hispanicaDataFile = 'platanus_x_hispanica';
var populus_albaDataFile = 'populus_alba';
var populus_nigra_pyramidalisDataFile = 'populus_nigra_pyramidalis';
var populus_nigraDataFile = 'populus_nigra';
var prunos_domesticaDataFile = 'prunos_domestica';
var prunus_cerasifera_pissardiiDataFile = 'prunus_cerasifera_pissardii';
var prunus_cerasiferaDataFile = 'prunus_cerasifera';
var prunus_serrulataDataFile = 'prunus_serrulata';
var quercus_fagineaDataFile = 'quercus_faginea';
var quercus_robur_fastigiataDataFile = 'quercus_robur_fastigiatas';
var quercus_roburDataFile = 'quercus_robur';
var quercus_rubraDataFile = 'quercus_rubra';
var quercus_suberDataFile = 'quercus_suber';
var rhododendron_ponticumDataFile = 'rhododendron_ponticum';
var salix_albaDataFile = 'salix_alba';
var salix_atrocinereaDataFile = 'salix_atrocinerea';
var salix_babylonicaDataFile = 'salix_babylonica';
var salix_capreaDataFile = 'salix_caprea';
var sambucus_nigraDataFile = 'sambucus_nigra';
var schinus_molleDataFile = 'schinus_molle';
var tília_cordataDataFile = 'tília_cordata';
var tiliaDataFile = 'tilia';
var ulmus_minorDataFile = 'ulmus_minor';
var washingtonia_filiferaDataFile = 'washingtonia_filifera';




/////////////////////////////////////////////////////////////////////////////
// Mapbox configuration

// This is the map from leithlatetours@gmail.com
mapboxgl.accessToken =
  'pk.eyJ1IjoibWFyY2Vsb2xtc2lsdmEiLCJhIjoiY2t3cGRtdnMyMDhsazJvcnR2M2Ric282eSJ9.uus1HR47tEE_5vKGMtp42A';

var map = new mapboxgl.Map({
  container: 'mapcontainer',
  style: 'mapbox://styles/marcelolmsilva/cl80oe19i000n14n46vvuqg04', //custom stylesheet
  center: [-8.345672, 41.484798], // starting position [lng, lat]
  zoom: 14, // starting zoom
  minZoom: 14,
});

/////////////////////////////////////////////////////////////////////////////
// An array of strings with the file path to the content for each site
var muralContentPath = [];
var studiosContentPath = [];
var treeContentPath = [];
var acerpContentPath = [];
var acerplContentPath = [];
var acerpsContentPath = [];
var acersaContentPath = [];
var aesculusContentPath = [];
var abateContentPath = [];
var semContentPath = [];
var alnus_glutinosaContentPath = [];
var arbutus_unedoContentPath = [];
var betula_pubescensContentPath = [];
var bosquetede_deSalix_capreaContentPath = [];
var camelliaContentPath = [];
var carpinus_betulusContentPath = [];
var catalpa_bignonioidesContentPath = [];
var cedrus_atlanticaContentPath = [];
var celtis_australisContentPath = [];
var cercis_siliquastrumContentPath = [];
var cordyline_australisContentPath = [];
var corylus_avellanaContentPath = [];
var cryptomeria_japonicaContentPath = [];
var cupressus_sempervirensContentPath = [];
var diospyros_virginianaContentPath = [];
var fagus_sylvaticaContentPath = [];
var fraxinus_angustifoliaContentPath = [];
var grevillea_robustaContentPath = [];
var ilex_aquifoliumContentPath = [];
var juglans_regiaContentPath = [];
var lagoestremia_indicaPath = [];
var laurus_nobilisContentPath = [];
var ligustrum_lucidumContentPath = [];
var liquidambar_styracifluaContentPath = [];
var liriodendron_tulipiferaContentPath = [];
var macieira_silvesteContentPath = [];
var magnoliaContentPath = [];
var magnolia_acuminataContentPath = [];
var magnolia_lilifloraContentPath = [];
var magnolia_soulangeanaContentPath = [];
var malus_domesticaContentPath = [];
var melia_azedarachContentPath = [];
var olea_europaeaContentPath = [];
var picea_abiesContentPath = [];
var pinus_pineaContentPath = [];
var pittosporum_tobiraContentPath = [];
var platanus_x_hispanicaContentPath = [];
var populus_albaContentPath = [];
var populus_nigra_pyramidalisContentPath = [];
var populus_nigraContentPath = [];
var prunos_domesticaContentPath = [];
var prunus_cerasifera_pissardiiContentPath = [];
var prunus_cerasiferaContentPath = [];
var prunus_serrulataContentPath = [];
var pyrus_communisContentPath = [];
var quercus_coccineaContentPath = [];
var quercus_fagineaContentPath = [];
var quercus_robur_fastigiataContentPath = [];
var quercus_roburContentPath = [];
var quercus_rubraContentPath = [];
var quercus_suberContentPath = [];
var rhododendron_ponticumContentPath = [];
var salix_albaContentPath = [];
var salix_atrocinereaContentPath = [];
var salix_babylonicaContentPath = [];
var salix_capreaContentPath = [];
var sambucus_nigraContentPath = [];
var schinus_molleContentPath = [];
var tília_cordataContentPath = [];
var tiliaContentPath = [];
var ulmus_minorContentPath = [];
var washingtonia_filiferaContentPath = [];


// An array of jQuery objects with the sidebar HTML content for each site
var muralContent = [];
var muralList = [];
var studiosContent = [];
var studiosList = [];
var treeContent = [];
var treeList = [];
var acerpContent = [];
var acerpList = [];
var acerplContent = [];
var acerplList = [];
var acerpsContent = [];
var acerpsList = [];
var acersaContent = [];
var acersaList = [];
var aesculusContent = [];
var aesculusList = [];
var abateContent = [];
var abateList = [];
var semContent = [];
var semList = [];
var alnus_glutinosaContent = [];
var alnus_glutinosaList = [];
var arbutus_unedoContent = [];
var arbutus_unedoList = [];
var betula_pubescensContent = [];
var betula_pubescensList = [];
var bosquetede_deSalix_capreaContent = [];
var bosquetede_deSalix_capreaList = [];
var camelliaContent = [];
var camelliaList = [];
var carpinus_betulusContent = [];
var carpinus_betulusList = [];
var catalpa_bignonioidesContent = [];
var catalpa_bignonioidesList = [];
var cedrus_atlanticaContent = [];
var cedrus_atlanticaList = [];
var celtis_australisContent = [];
var celtis_australisList = [];
var cercis_siliquastrumContent = [];
var cercis_siliquastrumList = [];
var cordyline_australisContent = [];
var cordyline_australisList = [];
var corylus_avellanaContent = [];
var corylus_avellanaList = [];
var cryptomeria_japonicaContent = [];
var cryptomeria_japonicaList = [];
var cupressus_sempervirensContent = [];
var cupressus_sempervirensList = [];
var diospyros_virginianaContent = [];
var diospyros_virginianaList = [];
var fagus_sylvaticaContent = [];
var fagus_sylvaticaList = [];
var fraxinus_angustifoliaContent = [];
var fraxinus_angustifoliaList = [];
var grevillea_robustaContent = [];
var grevillea_robustaList = [];
var ilex_aquifoliumContent = [];
var ilex_aquifoliumList = [];
var juglans_regiaContent = [];
var juglans_regiaList = [];
var lagoestremia_indicaContent = [];
var lagoestremia_indicaList = [];
var laurus_nobilisContent = [];
var laurus_nobilisList = [];
var ligustrum_lucidumContent = [];
var ligustrum_lucidumList = [];
var liquidambar_styracifluaContent = [];
var liquidambar_styracifluaList = [];
var liriodendron_tulipiferaContent = [];
var liriodendron_tulipiferaList = [];
var macieira_silvesteContent = [];
var macieira_silvesteList = [];
var magnoliaContent = [];
var magnoliaList = [];
var magnolia_acuminataContent = [];
var magnolia_acuminataList = [];
var magnolia_lilifloraContent = [];
var magnolia_lilifloraList = [];
var magnolia_soulangeanaContent = [];
var magnolia_soulangeanaList = [];
var malus_domesticaContent = [];
var malus_domesticaList = [];
var melia_azedarachContent = [];
var melia_azedarachList = [];
var olea_europaeaContent = [];
var olea_europaeaList = [];
var picea_abiesContent = [];
var picea_abiesList = [];
var pinus_pineaContent = [];
var pinus_pineaList = [];
var pittosporum_tobiraContent = [];
var pittosporum_tobiraList = [];
var platanus_x_hispanicaContent = [];
var platanus_x_hispanicaList = [];
var populus_albaContent = [];
var populus_albaList = [];
var populus_nigra_pyramidalisContent = [];
var populus_nigra_pyramidalisList = [];
var populus_nigraContent = [];
var populus_nigraList = [];
var prunos_domesticaContent = [];
var prunos_domesticaList = [];
var prunus_cerasifera_pissardiiContent = [];
var prunus_cerasifera_pissardiiList = [];
var prunus_cerasiferaContent = [];
var prunus_cerasiferaList = [];
var prunus_serrulataContent = [];
var prunus_serrulataList = [];
var pyrus_communisContent = [];
var pyrus_communisList = [];
var quercus_coccineaContent = [];
var qquercus_coccineaList = [];
var quercus_fagineaContent = [];
var quercus_fagineaList = [];
var quercus_robur_fastigiataContent = [];
var quercus_robur_fastigiataList = [];
var quercus_roburContent = [];
var quercus_roburList = [];
var quercus_rubraContent = [];
var quercus_rubraList = [];
var quercus_suberContent = [];
var quercus_suberList = [];
var rhododendron_ponticumContent = [];
var rhododendron_ponticumList = [];
var salix_albaContent = [];
var salix_albaList = [];
var salix_atrocinereaContent = [];
var salix_atrocinereaList = [];
var salix_babylonicaContent = [];
var salix_babylonicaList = [];
var salix_capreaContent = [];
var salix_capreaList = [];
var sambucus_nigraContent = [];
var sambucus_nigraList = [];
var schinus_molleContent = [];
var schinus_molleList = [];
var tília_cordataContent = [];
var tília_cordataList = [];
var tiliaContent = [];
var tiliaList = [];
var ulmus_minorContent = [];
var ulmus_minorList = [];
var washingtonia_filiferaContent = [];
var washingtonia_filiferaList = [];

// An array of jQuery objects with the image HTML content for each site
var muralImage = [];
var studiosImage = [];
var treeImage = [];
var acerpImage = [];
var acerplImage = [];
var acerpsImage = [];
var acersaImage = [];
var aesculusImage = [];
var abateImage = [];
var semImage = [];
var alnus_glutinosaImage = [];
var arbutus_unedoImage = [];
var betula_pubescensImage = [];
var bosquetede_deSalix_capreaImage = [];
var camelliaImage = [];
var carpinus_betulusImage = [];
var catalpa_bignonioidesImage = [];
var cedrus_atlanticaImage = [];
var celtis_australisImage = [];
var cercis_siliquastrumImage = [];
var cordyline_australisImage = [];
var corylus_avellanaImage = [];
var cryptomeria_japonicaImage = [];
var cupressus_sempervirensImage = [];
var diospyros_virginianaImage = [];
var fagus_sylvaticaImage = [];
var fraxinus_angustifoliaImage = [];
var grevillea_robustaImage = [];
var ilex_aquifoliumImage = [];
var juglans_regiaImage = [];
var lagoestremia_indicaImage = [];
var laurus_nobilisImage = [];
var ligustrum_lucidumImage = [];
var liquidambar_styracifluaImage = [];
var liriodendron_tulipiferaImage = [];
var macieira_silvesteImage = [];
var magnoliaImage = [];
var magnolia_acuminataImage = [];
var magnolia_lilifloraImage = [];
var magnolia_soulangeanaImage = [];
var malus_domesticaImage = [];
var melia_azedarachImage = [];
var olea_europaeaImage = [];
var picea_abiesImage = [];
var pinus_pineaImage = [];
var pittosporum_tobiraImage = [];
var platanus_x_hispanicaImage = [];
var populus_albaImage = [];
var populus_nigra_pyramidalisImage = [];
var populus_nigraImage = [];
var prunos_domesticaImage = [];
var prunus_cerasifera_pissardiiImage = [];
var prunus_cerasiferaImage = [];
var prunus_serrulataImage = [];
var pyrus_communisImage = [];


var quercus_coccineaImage = [];
var quercus_fagineaImage = [];
var quercus_robur_fastigiataImage = [];
var quercus_roburImage = [];
var quercus_rubraImage = [];
var quercus_suberImage = [];
var rhododendron_ponticumImage = [];
var salix_albaImage = [];
var salix_atrocinereaImage = [];
var salix_babylonicaImage = [];
var salix_capreaImage = [];
var sambucus_nigraImage = [];
var schinus_molleImage = [];
var tília_cordataImage = [];
var tiliaImage = [];
var ulmus_minorImage = [];
var washingtonia_filiferaImage = [];



const generateLayer = (layerName, img, sourceData) => {
  return map.loadImage(
    img,
    (error, image) => {
      if (error) throw error;
      const img = `${layerName}-img`;
      map.addImage(img, image);
      // Add a symbol layer
      map.addLayer({
        'id': layerName,
        'type': 'symbol',
        'source': {
          'type': 'geojson',
          'data': sourceData
        },
        'layout': {
          'icon-image': img,
          'icon-size': 0.5
        }
      });
    }
  );
}

/////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
// Begin once map assets are loaded
map.on('load', function (e) {

  generateLayer('tree', 'https://i.ibb.co/pZMrwFR/Icon01.png', treeData );
  generateLayer('studios', "https://i.ibb.co/mvC2JdH/Icon02.png", studiosData);
  generateLayer('murals', "https://i.ibb.co/J7ckgRb/Icon03.png", muralsData);
  generateLayer('acerp', "https://i.ibb.co/y4NCmTm/Icon04.png", acerpData);
  generateLayer('acerpl', "https://i.ibb.co/Y8SZMtR/Icon05.png", acerplData);
  generateLayer('acerps', "https://i.ibb.co/3k0fM5r/Icon06.png", acerpsData);
  generateLayer('acersa', "https://i.ibb.co/FDWf2jG/Icon07.png", acersaData);
  generateLayer('aesculus', "https://i.ibb.co/zSMqn3h/Icon08.png", aesculusData);
  generateLayer('alnus_glutinosa', 'https://i.ibb.co/swvRNCC/Icon09.png', alnus_glutinosaData );
  generateLayer('arbutus_unedo', 'https://i.ibb.co/Yk7WcR0/Icon10.png', arbutus_unedoData );
  generateLayer('betula_pubescens', 'https://i.ibb.co/x61xCMj/Icon11.png', betula_pubescensData );
  generateLayer('bosquetede_deSalix_caprea', 'https://i.ibb.co/r78TTY0/Icon12.png', bosquetede_deSalix_capreaData );
  generateLayer('camellia', 'https://i.ibb.co/09rQsRF/Icon13.png', camelliaData );
  generateLayer('carpinus_betulus', 'https://i.ibb.co/kgf9TK6/Icon14.png', carpinus_betulusData );
  generateLayer('catalpa_bignonioides', 'https://i.ibb.co/f4tbM74/Icon15.png', catalpa_bignonioidesData );
  generateLayer('cedrus_atlantica', 'https://i.ibb.co/qnCdLjv/Icon16.png', cedrus_atlanticaData );
  generateLayer('celtis_australis', 'https://i.ibb.co/gmyKqMV/Icon17.png', celtis_australisData );
  generateLayer('cercis_siliquastrum', 'https://i.ibb.co/FW7MpYY/Icon18.png', cercis_siliquastrumData );
  generateLayer('cordyline_australis', 'https://i.ibb.co/Qmjb4qD/Icon19.png', cordyline_australisData );
  generateLayer('corylus_avellana', 'https://i.ibb.co/7kpxNSX/Icon20.png', corylus_avellanaData );
  generateLayer('cryptomeria_japonica', 'https://i.ibb.co/JxqP8zC/Icon21.png', cryptomeria_japonicaData );
  generateLayer('cupressus_sempervirens', 'https://i.ibb.co/gFpkm8t/Icon22.png', cupressus_sempervirensData );
  generateLayer('diospyros_virginiana', 'https://i.ibb.co/Z6Mp8wz/Icon23.png', diospyros_virginianaData );
  generateLayer('fagus_sylvatica', 'https://i.ibb.co/HpGn9yt/Icon24.png', fagus_sylvaticaData );
  generateLayer('fraxinus_angustifolia', 'https://i.ibb.co/k9D7xkr/Icon25.png', fraxinus_angustifoliaData );
  generateLayer('grevillea_robusta', 'https://i.ibb.co/kGHG8fy/Icon26.png', grevillea_robustaData );
  generateLayer('ilex_aquifolium', 'https://i.ibb.co/ws6NGr3/Icon27.png', ilex_aquifoliumData );
  generateLayer('juglans_regia', 'https://i.ibb.co/TYHRYR0/Icon28.png', juglans_regiaData );
  generateLayer('lagoestremia_indica', 'https://i.ibb.co/54rvTJF/Icon29.png', lagoestremia_indicaData );
  generateLayer('laurus_nobilis', 'https://i.ibb.co/VLSdCXs/Icon30.png', laurus_nobilisData );
  generateLayer('ligustrum_lucidum', 'https://i.ibb.co/4RHsBsT/Icon31.png', ligustrum_lucidumData );
  generateLayer('liquidambar_styraciflua', 'https://i.ibb.co/Z8MwZqV/Icon32.png', liquidambar_styracifluaData );
  generateLayer('liriodendron_tulipifera', 'https://i.ibb.co/G0NkKnz/Icon33.png', liriodendron_tulipiferaData );
  generateLayer('macieira_silveste', 'https://i.ibb.co/3MS2SBv/Icon34.png', macieira_silvesteData );
  generateLayer('magnolia_acuminata', 'https://i.ibb.co/C9XDy7X/Icon35.png', magnolia_acuminataData );
  generateLayer('magnolia_liliflora', 'https://i.ibb.co/2jZHccF/Icon36.png', magnolia_lilifloraData );
  generateLayer('magnolia_soulangeana', 'https://i.ibb.co/ydZYrc2/Icon37.png', magnolia_soulangeanaData );
  generateLayer('magnolia', 'https://i.ibb.co/6Zynz7j/Icon38.png', magnoliaData );
  generateLayer('malus_domestica', 'https://i.ibb.co/fnxvScM/Icon39.png', malus_domesticaData );
  generateLayer('melia_azedarach', 'https://i.ibb.co/tXgfdKf/Icon40.png', melia_azedarachData );
  generateLayer('olea_europaea', 'https://i.ibb.co/1XLT354/Icon41.png', olea_europaeaData );
  generateLayer('picea_abies', 'https://i.ibb.co/jb4H192/Icon42.png', picea_abiesData );
  generateLayer('pinus_pinea', 'https://i.ibb.co/CnrXNz2/Icon43.png', pinus_pineaData );
  generateLayer('pittosporum_tobira', 'https://i.ibb.co/j5jD6rs/Icon44.png', pittosporum_tobiraData );
  generateLayer('platanus_x_hispanica', 'https://i.ibb.co/bv8Lt2D/Icon45.png', platanus_x_hispanicaData );
  generateLayer('populus_alba', 'https://i.ibb.co/0M1tPcW/Icon46.png', populus_albaData );
  generateLayer('populus_nigra_pyramidalis', 'https://i.ibb.co/VCgjb9M/Icon47.png', populus_nigra_pyramidalisData );
  generateLayer('populus_nigra', 'https://i.ibb.co/Zfnn83T/Icon48.png', populus_nigraData );
  generateLayer('prunos_domestica', 'https://i.ibb.co/YR33Fjn/Icon49.png', prunos_domesticaData );
  generateLayer('prunus_cerasifera_pissardii', 'https://i.ibb.co/GVz893z/Icon50.png', prunus_cerasifera_pissardiiData );
  generateLayer('prunus_cerasifera', 'https://i.ibb.co/b2RcH9g/Icon51.png', prunus_cerasiferaData );
  generateLayer('prunus_serrulata', 'https://i.ibb.co/LJgd7jD/Icon52.png', prunus_serrulataData );
  generateLayer('pyrus_communis', 'https://i.ibb.co/kMkzFJZ/Icon53.png', pyrus_communisData );
  generateLayer('quercus_coccinea', 'https://i.ibb.co/dGCK78B/Icon54.png', quercus_coccineaData );
  generateLayer('quercus_faginea', 'https://i.ibb.co/tYDQjQx/Icon55.png', quercus_fagineaData );
  generateLayer('quercus_robur_fastigiata', 'https://i.ibb.co/MG3CVTL/Icon56.png', quercus_robur_fastigiataData );
  generateLayer('quercus_robur', 'https://i.ibb.co/2NJKn7n/Icon57.png', quercus_roburData );
  generateLayer('quercus_rubra', 'https://i.ibb.co/1vTSJfg/Icon58.png', quercus_rubraData );
  generateLayer('quercus_suber', 'https://i.ibb.co/GRDDxrT/Icon59.png', quercus_suberData );
  generateLayer('rhododendron_ponticum', 'https://i.ibb.co/yFD0hnd/Icon60.png', rhododendron_ponticumData );
  generateLayer('salix_alba', 'https://i.ibb.co/qr0ZyGS/Icon61.png', salix_albaData );
  generateLayer('salix_atrocinerea', 'https://i.ibb.co/xHc0LTJ/Icon62.png', salix_atrocinereaData );
  generateLayer('salix_babylonica', 'https://i.ibb.co/YcV5W5h/Icon63.png', salix_babylonicaData );
  generateLayer('salix_caprea', 'https://i.ibb.co/zZP6PHv/Icon64.png', salix_capreaData );
  generateLayer('sambucus_nigra', 'https://i.ibb.co/0XPSYGv/Icon65.png', sambucus_nigraData );
  generateLayer('schinus_molle', 'https://i.ibb.co/f4WMjjT/Icon66.png', schinus_molleData );
  generateLayer('tília_cordata', 'https://i.ibb.co/HxFvB9y/Icon67.png', tília_cordataData );
  generateLayer('tilia', 'https://i.ibb.co/51m9GKz/Icon68.png', tiliaData );
  generateLayer('ulmus_minor', 'https://i.ibb.co/cbwQF3j/Icon69.png', ulmus_minorData );
  generateLayer('washingtonia_filifera', 'https://i.ibb.co/ZM99bX6/Icon70.png', washingtonia_filiferaData );
  generateLayer('abate', 'https://i.ibb.co/jRp0kfN/Abate.png', abateData );
  generateLayer('sem', 'https://i.ibb.co/T0xN3pG/Sem-Arvore.png', semData );



  ///////////////////////////////////////////////////////////////////////////
  // Build mouseover popups for murals (disable for touchscreens)
  if (!('ontouchstart' in window)) {
    map.on('click', 'quercus_coccinea', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'quercus_coccinea', function () {
        popup.remove();

      });
    });
    map.on('click', 'quercus_faginea', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'quercus_faginea', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'quercus_robur_fastigiata', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'quercus_robur_fastigiata', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'quercus_robur', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'quercus_robur', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'quercus_rubra', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'quercus_rubra', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'quercus_suber', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'quercus_suber', function () {
        popup.remove();
        createDefaultMensage();
      });
    });

    map.on('click', 'rhododendron_ponticum', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'rhododendron_ponticum', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'salix_alba', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'salix_alba', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'salix_atrocinerea', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'salix_atrocinerea', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'salix_babylonica', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'salix_babylonica', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'salix_caprea', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'salix_caprea', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'sambucus_nigra', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'sambucus_nigra', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'schinus_molle', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'schinus_molle', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'tília_cordata', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'tília_cordata', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'tilia', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'tilia', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'ulmus_minor', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'ulmus_minor', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'washingtonia_filifera', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'washingtonia_filifera', function () {
        popup.remove();
        createDefaultMensage();
      });
    });

    map.on('click', 'malus_domestica', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'malus_domestica', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'melia_azedarach', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'melia_azedarach', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'olea_europaea', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'olea_europaea', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'picea_abies', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'picea_abies', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'pinus_pinea', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'pinus_pinea', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'pittosporum_tobira', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'pittosporum_tobira', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'platanus_x_hispanica', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'platanus_x_hispanica', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'populus_alba', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'populus_alba', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'populus_nigra_pyramidalis', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'populus_nigra_pyramidalis', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'populus_nigra', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'populus_nigra', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'prunos_domestica', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'prunos_domestica', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'prunus_cerasifera_pissardii', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'prunus_cerasifera_pissardii', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'prunus_cerasifera', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'prunus_cerasifera', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'prunus_serrulata', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'prunus_serrulata', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'pyrus_communis', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'pyrus_communis', function () {
        popup.remove();
        createDefaultMensage();
      });
    });

    map.on('click', 'grevillea_robusta', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'grevillea_robusta', function () {
        popup.remove();
        createDefaultMensage();
      });
    });
    map.on('click', 'ilex_aquifolium', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'ilex_aquifolium', function () {
        popup.remove();
      });
    });
    map.on('click', 'juglans_regia', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'juglans_regia', function () {
        popup.remove();
      });
    });
    map.on('click', 'lagoestremia_indica', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'lagoestremia_indica', function () {
        popup.remove();
      });
    });
    map.on('click', 'laurus_nobilis', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'laurus_nobilis', function () {
        popup.remove();

      });
    });
    map.on('click', 'ligustrum_lucidum', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'ligustrum_lucidum', function () {
        popup.remove();

      });
    });
    map.on('click', 'liquidambar_styraciflua', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'liquidambar_styraciflua', function () {
        popup.remove();

      });
    });
    map.on('click', 'liriodendron_tulipifera', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'liriodendron_tulipifera', function () {
        popup.remove();

      });
    });
    map.on('click', 'macieira_silveste', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'macieira_silveste', function () {
        popup.remove();

      });
    });
    map.on('click', 'magnolia', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'magnolia', function () {
        popup.remove();

      });
    });
    map.on('click', 'magnolia_acuminata', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'magnolia_acuminata', function () {
        popup.remove();

      });
    });
    map.on('click', 'magnolia_liliflora', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'magnolia_liliflora', function () {
        popup.remove();

      });
    });
    map.on('click', 'magnolia_soulangeana', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'magnolia_soulangeana', function () {
        popup.remove();

      });
    });
    map.on('click', 'cedrus_atlantica', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'cedrus_atlantica', function () {
        popup.remove();

      });
    });
    map.on('click', 'celtis_australis', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'celtis_australis', function () {
        popup.remove();

      });
    });
    map.on('click', 'cercis_siliquastrum', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'cercis_siliquastrum', function () {
        popup.remove();

      });
    });
    map.on('click', 'cordyline_australis', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'cordyline_australis', function () {
        popup.remove();
      });
    });
    map.on('click', 'corylus_avellana', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'corylus_avellana', function () {
        popup.remove();

      });
    });
    map.on('click', 'cryptomeria_japonica', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'cryptomeria_japonica', function () {
        popup.remove();

      });
    });
    map.on('click', 'cupressus_sempervirens', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'cupressus_sempervirens', function () {
        popup.remove();
      });
    });
    map.on('click', 'diospyros_virginiana', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'diospyros_virginiana', function () {
        popup.remove();
      });
    });
    map.on('click', 'fagus_sylvatica', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'fagus_sylvatica', function () {
        popup.remove();

      });
    });
    map.on('click', 'fraxinus_angustifolia', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'fraxinus_angustifolia', function () {
        popup.remove();
      });
    });



    map.on('click', 'bosquetede_deSalix_caprea', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'bosquetede_deSalix_caprea', function () {
        popup.remove();

      });
    });
    map.on('click', 'camellia', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'camellia', function () {
        popup.remove();

      });
    });
    map.on('click', 'carpinus_betulus', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'carpinus_betulus', function () {
        popup.remove();

      });
    });
    map.on('click', 'catalpa_bignonioides', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'catalpa_bignonioides', function () {
        popup.remove();

      });
    });

    map.on('click', 'betula_pubescens', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'betula_pubescens', function () {
        popup.remove();

      });
    });
    map.on('click', 'murals', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'murals', function () {
        popup.remove();

      });
    });

    map.on('click', 'alnus_glutinosa', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'alnus_glutinosa', function () {
        popup.remove();

      });
    });
    map.on('click', 'arbutus_unedo', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'arbutus_unedo', function () {
        popup.remove();

      });
    });
    map.on('click', 'sem', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'sem', function () {
        popup.remove();

      });
    });
    map.on('click', 'abate', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'abate', function () {
        popup.remove();

      });
    });
    map.on('click', 'aesculus', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'aesculus', function () {
        popup.remove();
      });
    });
    map.on('click', 'acerp', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'acerp', function () {
        popup.remove();

      });
    });
    map.on('click', 'acerpl', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'acerpl', function () {
        popup.remove();

      });
    });
    map.on('click', 'acerps', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'acerps', function () {
        popup.remove();

      });
    });
    map.on('click', 'acersa', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'acersa', function () {
        popup.remove();

      });
    });
    map.on('click', 'tree', function (e) {

      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'tree', function () {
        popup.remove();

      });
    });
    // Build mouseover popups for studios
    map.on('click', 'studios', function (e) {
      let coordinates = e.features[0].geometry.coordinates.slice();
      let name = e.features[0].properties.Nº_;

      // Create a popup, but don't add it to the map yet.
      let popup = new mapboxgl.Popup({
        className: "Mypopup",
        closeButton: true,
        closeOnClick: true,
        offset: [0, -10],
      });

      // Populate the popup and set its coordinates
      popup
        .setLngLat(coordinates)
        .setHTML(name)
        .addTo(map);

      // Have it disappear when the mouse leaves
      map.on('mouseleave', 'studios', function () {
        popup.remove();

      });
    });
  }

  /////////////////////////////////////////////////////////////////////////////
  // When user clicks on a map feature, open the content
  map.on('click', 'quercus_coccinea', function (e) {

    document.getElementById('legenda').innerHTML =

      "<p>" + "<b>" + "Identificação:" + "</b>" + "  " + e.features[0].properties.Nº_ + "<p/>" +
      "<p>" + "<b>" + "Nome Comum:" + "</b>" + "  " + e.features[0].properties.Nomes_Comu + "<p/>" +
      "<p>" + "<b>" + "Nome científico:" + "</b>" + "  " + e.features[0].properties.Nome_Cient + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Quercus_coccinea" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
    // Fill content panels with prebuilt content

  });
  map.on('click', 'quercus_faginea', function (e) {

    document.getElementById('legenda').innerHTML =

      "<p>" + "<b>" + "Identificação:" + "</b>" + "  " + e.features[0].properties.Nº_ + "<p/>" +
      "<p>" + "<b>" + "Nome Comum:" + "</b>" + "  " + e.features[0].properties.Nomes_Comu + "<p/>" +
      "<p>" + "<b>" + "Nome científico:" + "</b>" + "  " + e.features[0].properties.Nome_Cient + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://www.museubiodiversidade.uevora.pt/elenco-de-especies/biodiversidade-actual/plantas/angiospermicas/quercus-broteroi/" id="btnInfo" target="_new" style="display: inline-block; ">+ Saber mais</a>'
    // Fill content panels with prebuilt content

  });
  map.on('click', 'quercus_robur_fastigiata', function (e) {

    document.getElementById('legenda').innerHTML =

      "<p>" + "<b>" + "" + "Identificação:" + "</b>" + "" + "  " + e.features[0].properties.Nº_ + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://www.museubiodiversidade.uevora.pt/elenco-de-especies/biodiversidade-actual/plantas/angiospermicas/quercus-broteroi/" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
    // Fill content panels with prebuilt content

  });
  map.on('click', 'quercus_robur', function (e) {

    document.getElementById('legenda').innerHTML =

      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Quercus_robur" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'

  });
  map.on('click', 'quercus_rubra', function (e) {

    document.getElementById('legenda').innerHTML =

      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Quercus_rubra" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });
  map.on('click', 'quercus_suber', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Quercus_suber" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'

    // Fill content panels with prebuilt content

  });

  map.on('click', 'rhododendron_ponticum', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Rhododendron_ponticum_subesp_baeticum" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'

    // Fill content panels with prebuilt content

  });
  map.on('click', 'salix_alba', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Salix_alba" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });
  map.on('click', 'salix_atrocinerea', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Salix_atrocinerea" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });
  map.on('click', 'salix_babylonica', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Salix_babylonica" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'



    // Fill content panels with prebuilt content

  });
  map.on('click', 'salix_caprea', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Salix_caprea" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'

  });
  map.on('click', 'sambucus_nigra', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Sambucus_nigra_subesp_nigra" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });
  map.on('click', 'schinus_molle', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Schinus_molle" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'

    // Fill content panels with prebuilt content

  });
  map.on('click', 'tília_cordata', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a id="butao" role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Tilia_cordata" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });
  map.on('click', 'tilia', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Tilia_cordata" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });
  map.on('click', 'ulmus_minor', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Ulmus_minor" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });
  map.on('click', 'washingtonia_filifera', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="http://www.isa.ulisboa.pt/pbta/colecao-botanica/washingtonia-filifera" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });

  map.on('click', 'malus_domestica', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Malus_domestica" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });
  map.on('click', 'melia_azedarach', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Melia_azedarach" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });
  map.on('click', 'olea_europaea', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Olea_europaea_subesp_europaea_var_sylvestris" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });

  map.on('click', 'picea_abies', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Picea_abies" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });
  map.on('click', 'pinus_pinea', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Pinus_pinea" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });
  map.on('click', 'pittosporum_tobira', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Pittosporum_tobira" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'

    // Fill content panels with prebuilt content

  });
  map.on('click', 'platanus_x_hispanica', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Platanus_hispanica" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });

  map.on('click', 'populus_alba', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Populus_alba" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'



    // Fill content panels with prebuilt content

  });
  map.on('click', 'populus_nigra_pyramidalis', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://naturdata.com/especie/Populus-nigra-subsp.--pyramidalis/19081/0/" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'



    // Fill content panels with prebuilt content

  });
  map.on('click', 'populus_nigra', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Populus_nigra" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'


    // Fill content panels with prebuilt content

  });

  map.on('click', 'prunos_domestica', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Prunus_domestica" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'



    // Fill content panels with prebuilt content

  });
  map.on('click', 'prunus_cerasifera_pissardii', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Prunus_cerasifera" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'



    // Fill content panels with prebuilt content

  });

  map.on('click', 'prunus_cerasifera', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Prunus_cerasifera" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'



    // Fill content panels with prebuilt content

  });
  map.on('click', 'prunus_serrulata', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Prunus_serrulata" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'



    // Fill content panels with prebuilt content

  });

  map.on('click', 'pyrus_communis', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Pyrus_communis" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });


  map.on('click', 'grevillea_robusta', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Grevillea_robusta" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  // Fill content panels with prebuilt content


  map.on('click', 'ilex_aquifolium', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Ilex_aquifolium" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  // Fill content panels with prebuilt content


  map.on('click', 'juglans_regia', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Juglans_regia" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'lagoestremia_indica', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Lagerstroemia_indica" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'laurus_nobilis', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Laurus_nobilis" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'ligustrum_lucidum', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Ligustrum_lucidum" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'liquidambar_styraciflua', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Liquidambar_styraciflua" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  // Fill content panels with prebuilt content


  map.on('click', 'liriodendron_tulipifera', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Liriodendron_tulipifera" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  map.on('click', 'macieira_silveste', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://www.florestar.net/macieira-brava-malus-sylvestris" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  map.on('click', 'magnolia', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://pt.frwiki.wiki/wiki/Magnolia_acuminata" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  // Fill content panels with prebuilt content
  map.on('click', 'magnolia_acuminata', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://pt.frwiki.wiki/wiki/Magnolia_acuminata" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'magnolia_liliflora', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://www.jardineiro.net/plantas/magnolia-magnolia-liliflora.html" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'magnolia_soulangeana', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Magnolia_x_soulangeana" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });


  map.on('click', 'cedrus_atlantica', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comu + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Cient + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Cedrus_atlantica" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'celtis_australis', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Celtis_australis" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'cercis_siliquastrum', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Cercis_siliquastrum" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  map.on('click', 'cordyline_australis', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Cordyline_australis" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'corylus_avellana', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Corylus_avellana" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  // Fill content panels with prebuilt content

  map.on('click', 'cryptomeria_japonica', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Cryptomeria_japonica" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'cupressus_sempervirens', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Cupressus_sempervirens" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'diospyros_virginiana', function (e) {


    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://www.josedocanto.com/plants/diospyros-virginiana" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  // Fill content panels with prebuilt content


  map.on('click', 'fagus_sylvatica', function (e) {
    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Fagus_sylvatica" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  // Fill content panels with prebuilt content


  map.on('click', 'fraxinus_angustifolia', function (e) {
    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns  +"</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Fraxinus_angustifolia_subesp_angustifolia" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  // Fill content panels with prebuilt content



  map.on('click', 'bosquetede_deSalix_caprea', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Salix_caprea" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'camellia', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://en.wikipedia.org/wiki/Camellia" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  // Fill content panels with prebuilt content

  map.on('click', 'carpinus_betulus', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Carpinus_betulus" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  // Fill content panels with prebuilt content

  map.on('click', 'catalpa_bignonioides', function (e) {
    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Catalpa_bignonioides" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'abate', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Motivo:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Estado + "</font>" + "<p/>"


  });

  map.on('click', 'betula_pubescens', function (e) {
    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Betula_pubescens" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'alnus_glutinosa', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Alnus_glutinosa" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'arbutus_unedo', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Arbutus_unedo" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  // Fill content panels with prebuilt content
  map.on('click', 'sem', function (e) {
    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>"
  });

  map.on('click', 'murals', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Arbutus_unedo" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'aesculus', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Aesculus_hippocastanum" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  // Fill content panels with prebuilt content
  map.on('click', 'acerp', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Acer_palmatum" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'acerpl', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Acer_platanoides" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  map.on('click', 'acerps', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Acer_pseudoplatanus" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });
  map.on('click', 'acersa', function (e) {

    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Acer_saccharinum" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'tree', function (e) {
    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Acer_campestre" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  map.on('click', 'studios', function (e) {
    document.getElementById('legenda').innerHTML =
      "<p>" + "<b>" + "<font size='4.5'>" + "Identificação:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nº_ + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome Comum:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nomes_Comuns + "</font>" + "<p/>" +
      "<p>" + "<b>" + "<font size='4.5'>" + "Nome científico:" + "</b>" + "<font size='4.5'>" + "  " + e.features[0].properties.Nome_Científico + "</font>" + "<p/>" +
      '<a role="button" class="btn btn-info" href="https://jb.utad.pt/especie/Acer_monspessulanum" id="btnInfo" target="_new" style="display: inline-block;">+ Saber mais</a>'
  });

  // Change the cursor to a pointer when the mouse is over a symbol layer.
  map.on('mouseenter', 'murals', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseenter', 'betula_pubescens', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'bosquetede_deSalix_caprea', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'camellia', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'carpinus_betulus', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'catalpa_bignonioides', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'alnus_glutinosa', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'arbutus_unedo', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'sem', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'abate', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'aesculus', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'acerp', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'acerpl', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'acerps', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'acersa', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'tree', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'studios', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'cedrus_atlantica', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'celtis_australis', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'cercis_siliquastrum', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'cordyline_australis', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'corylus_avellana', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'cryptomeria_japonica', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'cupressus_sempervirens', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'diospyros_virginiana', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'fagus_sylvatica', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'fraxinus_angustifolia', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseenter', 'grevillea_robusta', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'ilex_aquifolium', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'lagoestremia_indica', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'laurus_nobilis', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'ligustrum_lucidum', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'liquidambar_styraciflua', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'liriodendron_tulipifera', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'macieira_silveste', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'magnolia_acuminata', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'magnolia', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'magnolia_liliflora', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'juglans_regia', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'magnolia_soulangeana', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseenter', 'malus_domestica', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'melia_azedarach', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'olea_europaea', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'picea_abies', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'pinus_pinea', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'pittosporum_tobira', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'platanus_x_hispanica', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'populus_alba', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseenter', 'populus_nigra_pyramidalis', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'populus_nigra', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'prunos_domestica', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseenter', 'prunus_cerasifera_pissardii', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'prunus_cerasifera', function () {
    map.getCanvas().style.cursor = 'pointer';
  });

  map.on('mouseenter', 'prunus_serrulata', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'pyrus_communis', function () {
    map.getCanvas().style.cursor = 'pointer';
  });



  map.on('mouseenter', 'quercus_coccinea', function () {
    map.getCanvas().style.cursor = 'crosshair';
  });
  map.on('mouseenter', 'quercus_faginea', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'quercus_robur_fastigiata', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'quercus_robur', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'quercus_rubra', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'quercus_suber', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'rhododendron_ponticum', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'salix_alba', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'salix_atrocinerea', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'salix_babylonica', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'salix_caprea', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'sambucus_nigra', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'schinus_molle', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'tília_cordata', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'tilia', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'ulmus_minor', function () {
    map.getCanvas().style.cursor = 'pointer';
  });
  map.on('mouseenter', 'washingtonia_filifera', function () {
    map.getCanvas().style.cursor = 'pointer';
  });





  // Change it back from a pointer when it leaves.
  map.on('mouseleave', 'murals', function () {
    map.getCanvas().style.cursor = '';
  });

  map.on('mouseleave', 'betula_pubescens', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'bosquetede_deSalix_caprea', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'camellia', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'carpinus_betulus', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'catalpa_bignonioides', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'alnus_glutinosa', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'arbutus_unedo', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'sem', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'abate', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'aesculus', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'acerp', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'acerpl', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'acerps', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'acersa', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'tree', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'studios', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'cedrus_atlantica', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'celtis_australis', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'cercis_siliquastrum', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'cordyline_australis', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'corylus_avellana', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'cryptomeria_japonica', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'cupressus_sempervirens', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'diospyros_virginiana', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'fagus_sylvatica', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'fraxinus_angustifolia', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'grevillea_robusta', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'ilex_aquifolium', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'juglans_regia', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'lagoestremia_indica', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'laurus_nobilis', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'ligustrum_lucidum', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'macieira_silveste', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'magnolia', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'magnolia_acuminata', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'magnolia_liliflora', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'liquidambar_styraciflua', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'liriodendron_tulipifera', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'magnolia_soulangeana', function () {
    map.getCanvas().style.cursor = '';
  });

  map.on('mouseleave', 'malus_domestica', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'melia_azedarach', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'olea_europaea', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'picea_abies', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'pinus_pinea', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'pittosporum_tobira', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'platanus_x_hispanica', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'populus_alba', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'populus_nigra_pyramidalis', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'populus_nigra', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'prunos_domestica', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'prunus_cerasifera_pissardii', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'prunus_cerasifera', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'prunus_serrulata', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'pyrus_communis', function () {
    map.getCanvas().style.cursor = '';
  });


  map.on('mouseleave', 'quercus_coccinea', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'quercus_faginea', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'quercus_robur_fastigiata', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'quercus_robur', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'quercus_rubra', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'quercus_suber', function () {
    map.getCanvas().style.cursor = '';
  });

  map.on('mouseleave', 'rhododendron_ponticum', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'salix_alba', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'salix_atrocinerea', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'salix_babylonica', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'salix_caprea', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'sambucus_nigra', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'schinus_molle', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'tília_cordata', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'tilia', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'ulmus_minor', function () {
    map.getCanvas().style.cursor = '';
  });
  map.on('mouseleave', 'washingtonia_filifera', function () {
    map.getCanvas().style.cursor = '';
  });



});

//function to reset map

function switchlayer(lname, show = false) {
  if (document.getElementById(lname + "CB").checked || show) {
    map.setLayoutProperty(lname, 'visibility', 'visible');
  } else {
    map.setLayoutProperty(lname, 'visibility', 'none');
  }
}

let show = true;

function handleClickOnAndOff() {
  if (show) {
    hideAll();
    show = false;
  } else {
    showAll();
    show = true;
  }
}

function hideAll() {
  map.setLayoutProperty('murals', 'visibility', 'none');
  document.getElementById("muralsCB").checked = false;
  map.setLayoutProperty('sem', 'visibility', 'none');
  document.getElementById("semCB").checked = false;
  map.setLayoutProperty('abate', 'visibility', 'none');
  document.getElementById("abateCB").checked = false;
  map.setLayoutProperty('aesculus', 'visibility', 'none');
  document.getElementById("aesculusCB").checked = false;
  map.setLayoutProperty('acerp', 'visibility', 'none');
  document.getElementById("acerpCB").checked = false;
  map.setLayoutProperty('acerpl', 'visibility', 'none');
  document.getElementById("acerplCB").checked = false;
  map.setLayoutProperty('acerps', 'visibility', 'none');
  document.getElementById("acerpsCB").checked = false;
  map.setLayoutProperty('acersa', 'visibility', 'none');
  document.getElementById("acersaCB").checked = false;
  map.setLayoutProperty('tree', 'visibility', 'none');
  document.getElementById("treeCB").checked = false;
  map.setLayoutProperty('studios', 'visibility', 'none');
  document.getElementById("studiosCB").checked = false;
  map.setLayoutProperty('alnus_glutinosa', 'visibility', 'none');
  document.getElementById("alnus_glutinosaCB").checked = false;
  map.setLayoutProperty('arbutus_unedo', 'visibility', 'none');
  document.getElementById("arbutus_unedoCB").checked = false;
  map.setLayoutProperty('betula_pubescens', 'visibility', 'none');
  document.getElementById("betula_pubescensCB").checked = false;
  map.setLayoutProperty('bosquetede_deSalix_caprea', 'visibility', 'none');
  document.getElementById("bosquetede_deSalix_capreaCB").checked = false;
  map.setLayoutProperty('camellia', 'visibility', 'none');
  document.getElementById("camelliaCB").checked = false;
  map.setLayoutProperty('carpinus_betulus', 'visibility', 'none');
  document.getElementById("carpinus_betulusCB").checked = false;
  map.setLayoutProperty('catalpa_bignonioides', 'visibility', 'none');
  document.getElementById("catalpa_bignonioidesCB").checked = false;
  map.setLayoutProperty('cedrus_atlantica', 'visibility', 'none');
  document.getElementById("cedrus_atlanticaCB").checked = false;
  map.setLayoutProperty('celtis_australis', 'visibility', 'none');
  document.getElementById("celtis_australisCB").checked = false;
  map.setLayoutProperty('cercis_siliquastrum', 'visibility', 'none');
  document.getElementById("cercis_siliquastrumCB").checked = false;
  map.setLayoutProperty('cordyline_australis', 'visibility', 'none');
  document.getElementById("cordyline_australisCB").checked = false;
  map.setLayoutProperty('corylus_avellana', 'visibility', 'none');
  document.getElementById("corylus_avellanaCB").checked = false;
  map.setLayoutProperty('cryptomeria_japonica', 'visibility', 'none');
  document.getElementById("cryptomeria_japonicaCB").checked = false;
  map.setLayoutProperty('cupressus_sempervirens', 'visibility', 'none');
  document.getElementById("cupressus_sempervirensCB").checked = false;
  map.setLayoutProperty('diospyros_virginiana', 'visibility', 'none');
  document.getElementById("diospyros_virginianaCB").checked = false;
  map.setLayoutProperty('fagus_sylvatica', 'visibility', 'none');
  document.getElementById("fagus_sylvaticaCB").checked = false;
  map.setLayoutProperty('fraxinus_angustifolia', 'visibility', 'none');
  document.getElementById("fraxinus_angustifoliaCB").checked = false;
  map.setLayoutProperty('grevillea_robusta', 'visibility', 'none');
  document.getElementById("grevillea_robustaCB").checked = false;
  map.setLayoutProperty('ilex_aquifolium', 'visibility', 'none');
  document.getElementById("ilex_aquifoliumCB").checked = false;
  map.setLayoutProperty('juglans_regia', 'visibility', 'none');
  document.getElementById("juglans_regiaCB").checked = false;
  map.setLayoutProperty('lagoestremia_indica', 'visibility', 'none');
  document.getElementById("lagoestremia_indicaCB").checked = false;
  map.setLayoutProperty('laurus_nobilis', 'visibility', 'none');
  document.getElementById("laurus_nobilisCB").checked = false;
  map.setLayoutProperty('ligustrum_lucidum', 'visibility', 'none');
  document.getElementById("ligustrum_lucidumCB").checked = false;
  map.setLayoutProperty('liquidambar_styraciflua', 'visibility', 'none');
  document.getElementById("liquidambar_styracifluaCB").checked = false;
  map.setLayoutProperty('liriodendron_tulipifera', 'visibility', 'none');
  document.getElementById("liriodendron_tulipiferaCB").checked = false;
  map.setLayoutProperty('macieira_silveste', 'visibility', 'none');
  document.getElementById("macieira_silvesteCB").checked = false;
  map.setLayoutProperty('magnolia_acuminata', 'visibility', 'none');
  document.getElementById("magnolia_acuminataCB").checked = false;
  map.setLayoutProperty('magnolia', 'visibility', 'none');
  document.getElementById("magnoliaCB").checked = false;
  map.setLayoutProperty('magnolia_liliflora', 'visibility', 'none');
  document.getElementById("magnolia_lilifloraCB").checked = false;
  map.setLayoutProperty('magnolia_soulangeana', 'visibility', 'none');
  document.getElementById("magnolia_soulangeanaCB").checked = false;
  map.setLayoutProperty('malus_domestica', 'visibility', 'none');
  document.getElementById("malus_domesticaCB").checked = false;
  map.setLayoutProperty('melia_azedarach', 'visibility', 'none');
  document.getElementById("melia_azedarachCB").checked = false;
  map.setLayoutProperty('olea_europaea', 'visibility', 'none');
  document.getElementById("olea_europaeaCB").checked = false;
  map.setLayoutProperty('picea_abies', 'visibility', 'none');
  document.getElementById("picea_abiesCB").checked = false;
  map.setLayoutProperty('pinus_pinea', 'visibility', 'none');
  document.getElementById("pinus_pineaCB").checked = false;
  map.setLayoutProperty('pittosporum_tobira', 'visibility', 'none');
  document.getElementById("pittosporum_tobiraCB").checked = false;
  map.setLayoutProperty('platanus_x_hispanica', 'visibility', 'none');
  document.getElementById("platanus_x_hispanicaCB").checked = false;
  map.setLayoutProperty('populus_alba', 'visibility', 'none');
  document.getElementById("populus_albaCB").checked = false;
  map.setLayoutProperty('populus_nigra_pyramidalis', 'visibility', 'none');
  document.getElementById("populus_nigra_pyramidalisCB").checked = false;
  map.setLayoutProperty('populus_nigra', 'visibility', 'none');
  document.getElementById("populus_nigraCB").checked = false;
  map.setLayoutProperty('prunos_domestica', 'visibility', 'none');
  document.getElementById("prunos_domesticaCB").checked = false;
  map.setLayoutProperty('prunus_cerasifera_pissardii', 'visibility', 'none');
  document.getElementById("prunus_cerasifera_pissardiiCB").checked = false;
  map.setLayoutProperty('prunus_cerasifera', 'visibility', 'none');
  document.getElementById("prunus_cerasiferaCB").checked = false;
  map.setLayoutProperty('prunus_serrulata', 'visibility', 'none');
  document.getElementById("prunus_serrulataCB").checked = false;
  map.setLayoutProperty('pyrus_communis', 'visibility', 'none');
  document.getElementById("pyrus_communisCB").checked = false;
  map.setLayoutProperty('quercus_coccinea', 'visibility', 'none');
  document.getElementById("quercus_coccineaCB").checked = false;
  map.setLayoutProperty('quercus_faginea', 'visibility', 'none');
  document.getElementById("quercus_fagineaCB").checked = false;
  map.setLayoutProperty('quercus_robur_fastigiata', 'visibility', 'none');
  document.getElementById("quercus_robur_fastigiataCB").checked = false;
  map.setLayoutProperty('quercus_robur', 'visibility', 'none');
  document.getElementById("quercus_roburCB").checked = false;
  map.setLayoutProperty('quercus_rubra', 'visibility', 'none');
  document.getElementById("quercus_rubraCB").checked = false;
  map.setLayoutProperty('quercus_suber', 'visibility', 'none');
  document.getElementById("quercus_suberCB").checked = false;
  map.setLayoutProperty('rhododendron_ponticum', 'visibility', 'none');
  document.getElementById("rhododendron_ponticumCB").checked = false;
  map.setLayoutProperty('salix_alba', 'visibility', 'none');
  document.getElementById("salix_albaCB").checked = false;
  map.setLayoutProperty('salix_atrocinerea', 'visibility', 'none');
  document.getElementById("salix_atrocinereaCB").checked = false;
  map.setLayoutProperty('salix_babylonica', 'visibility', 'none');
  document.getElementById("salix_babylonicaCB").checked = false;
  map.setLayoutProperty('salix_caprea', 'visibility', 'none');
  document.getElementById("salix_capreaCB").checked = false;
  map.setLayoutProperty('sambucus_nigra', 'visibility', 'none');
  document.getElementById("sambucus_nigraCB").checked = false;
  map.setLayoutProperty('schinus_molle', 'visibility', 'none');
  document.getElementById("schinus_molleCB").checked = false;
  map.setLayoutProperty('tília_cordata', 'visibility', 'none');
  document.getElementById("tília_cordataCB").checked = false;
  map.setLayoutProperty('tilia', 'visibility', 'none');
  document.getElementById("tiliaCB").checked = false;
  map.setLayoutProperty('ulmus_minor', 'visibility', 'none');
  document.getElementById("ulmus_minorCB").checked = false;
  map.setLayoutProperty('washingtonia_filifera', 'visibility', 'none');
  document.getElementById("washingtonia_filiferaCB").checked = false;


}

function showAll() {
  map.setLayoutProperty('murals', 'visibility', 'visible');
  document.getElementById("muralsCB").checked = true;
  map.setLayoutProperty('sem', 'visibility', 'visible');
  document.getElementById("semCB").checked = true;
  map.setLayoutProperty('abate', 'visibility', 'visible');
  document.getElementById("abateCB").checked = true;
  map.setLayoutProperty('aesculus', 'visibility', 'visible');
  document.getElementById("aesculusCB").checked = true;
  map.setLayoutProperty('acerp', 'visibility', 'visible');
  document.getElementById("acerpCB").checked = true;
  map.setLayoutProperty('acerpl', 'visibility', 'visible');
  document.getElementById("acerplCB").checked = true;
  map.setLayoutProperty('acerps', 'visibility', 'visible');
  document.getElementById("acerpsCB").checked = true;
  map.setLayoutProperty('acersa', 'visibility', 'visible');
  document.getElementById("acersaCB").checked = true;
  map.setLayoutProperty('tree', 'visibility', 'visible');
  document.getElementById("treeCB").checked = true;
  map.setLayoutProperty('studios', 'visibility', 'visible');
  document.getElementById("studiosCB").checked = true;
  map.setLayoutProperty('alnus_glutinosa', 'visibility', 'visible');
  document.getElementById("alnus_glutinosaCB").checked = true;
  map.setLayoutProperty('arbutus_unedo', 'visibility', 'visible');
  document.getElementById("arbutus_unedoCB").checked = true;
  map.setLayoutProperty('betula_pubescens', 'visibility', 'visible');
  document.getElementById("betula_pubescensCB").checked = true;
  map.setLayoutProperty('bosquetede_deSalix_caprea', 'visibility', 'visible');
  document.getElementById("bosquetede_deSalix_capreaCB").checked = true;
  map.setLayoutProperty('camellia', 'visibility', 'visible');
  document.getElementById("camelliaCB").checked = true;
  map.setLayoutProperty('carpinus_betulus', 'visibility', 'visible');
  document.getElementById("carpinus_betulusCB").checked = true;
  map.setLayoutProperty('catalpa_bignonioides', 'visibility', 'visible');
  document.getElementById("catalpa_bignonioidesCB").checked = true;
  map.setLayoutProperty('cedrus_atlantica', 'visibility', 'visible');
  document.getElementById("cedrus_atlanticaCB").checked = true;
  map.setLayoutProperty('celtis_australis', 'visibility', 'visible');
  document.getElementById("celtis_australisCB").checked = true;
  map.setLayoutProperty('cercis_siliquastrum', 'visibility', 'visible');
  document.getElementById("cercis_siliquastrumCB").checked = true;
  map.setLayoutProperty('cordyline_australis', 'visibility', 'visible');
  document.getElementById("cordyline_australisCB").checked = true;
  map.setLayoutProperty('corylus_avellana', 'visibility', 'visible');
  document.getElementById("corylus_avellanaCB").checked = true;
  map.setLayoutProperty('cryptomeria_japonica', 'visibility', 'visible');
  document.getElementById("cryptomeria_japonicaCB").checked = true;
  map.setLayoutProperty('cupressus_sempervirens', 'visibility', 'visible');
  document.getElementById("cupressus_sempervirensCB").checked = true;
  map.setLayoutProperty('diospyros_virginiana', 'visibility', 'visible');
  document.getElementById("diospyros_virginianaCB").checked = true;
  map.setLayoutProperty('fagus_sylvatica', 'visibility', 'visible');
  document.getElementById("fagus_sylvaticaCB").checked = true;
  map.setLayoutProperty('fraxinus_angustifolia', 'visibility', 'visible');
  document.getElementById("fraxinus_angustifoliaCB").checked = true;
  map.setLayoutProperty('grevillea_robusta', 'visibility', 'visible');
  document.getElementById("grevillea_robustaCB").checked = true;
  map.setLayoutProperty('ilex_aquifolium', 'visibility', 'visible');
  document.getElementById("ilex_aquifoliumCB").checked = true;
  map.setLayoutProperty('juglans_regia', 'visibility', 'visible');
  document.getElementById("juglans_regiaCB").checked = true;
  map.setLayoutProperty('lagoestremia_indica', 'visibility', 'visible');
  document.getElementById("lagoestremia_indicaCB").checked = true;
  map.setLayoutProperty('laurus_nobilis', 'visibility', 'visible');
  document.getElementById("laurus_nobilisCB").checked = true;
  map.setLayoutProperty('ligustrum_lucidum', 'visibility', 'visible');
  document.getElementById("ligustrum_lucidumCB").checked = true;
  map.setLayoutProperty('liquidambar_styraciflua', 'visibility', 'visible');
  document.getElementById("liquidambar_styracifluaCB").checked = true;
  map.setLayoutProperty('liriodendron_tulipifera', 'visibility', 'visible');
  document.getElementById("liriodendron_tulipiferaCB").checked = true;
  map.setLayoutProperty('macieira_silveste', 'visibility', 'visible');
  document.getElementById("macieira_silvesteCB").checked = true;
  map.setLayoutProperty('magnolia', 'visibility', 'visible');
  document.getElementById("magnoliaCB").checked = true;
  map.setLayoutProperty('magnolia_acuminata', 'visibility', 'visible');
  document.getElementById("magnolia_acuminataCB").checked = true;
  map.setLayoutProperty('magnolia_liliflora', 'visibility', 'visible');
  document.getElementById("magnolia_lilifloraCB").checked = true;
  map.setLayoutProperty('magnolia_soulangeana', 'visibility', 'visible');
  document.getElementById("magnolia_soulangeanaCB").checked = true;
  map.setLayoutProperty('malus_domestica', 'visibility', 'visible');
  document.getElementById("malus_domesticaCB").checked = true;
  map.setLayoutProperty('melia_azedarach', 'visibility', 'visible');
  document.getElementById("melia_azedarachCB").checked = true;
  map.setLayoutProperty('olea_europaea', 'visibility', 'visible');
  document.getElementById("olea_europaeaCB").checked = true;
  map.setLayoutProperty('picea_abies', 'visibility', 'visible');
  document.getElementById("picea_abiesCB").checked = true;
  map.setLayoutProperty('pinus_pinea', 'visibility', 'visible');
  document.getElementById("pinus_pineaCB").checked = true;
  map.setLayoutProperty('pittosporum_tobira', 'visibility', 'visible');
  document.getElementById("pittosporum_tobiraCB").checked = true;
  map.setLayoutProperty('platanus_x_hispanica', 'visibility', 'visible');
  document.getElementById("platanus_x_hispanicaCB").checked = true;
  map.setLayoutProperty('populus_alba', 'visibility', 'visible');
  document.getElementById("populus_albaCB").checked = true;
  map.setLayoutProperty('populus_nigra_pyramidalis', 'visibility', 'visible');
  document.getElementById("populus_nigra_pyramidalisCB").checked = true;
  map.setLayoutProperty('populus_nigra', 'visibility', 'visible');
  document.getElementById("populus_nigraCB").checked = true;
  map.setLayoutProperty('prunos_domestica', 'visibility', 'visible');
  document.getElementById("prunos_domesticaCB").checked = true;
  map.setLayoutProperty('prunus_cerasifera_pissardii', 'visibility', 'visible');
  document.getElementById("prunus_cerasifera_pissardiiCB").checked = true;
  map.setLayoutProperty('prunus_cerasifera', 'visibility', 'visible');
  document.getElementById("prunus_cerasiferaCB").checked = true;
  map.setLayoutProperty('prunus_serrulata', 'visibility', 'visible');
  document.getElementById("prunus_serrulataCB").checked = true;
  map.setLayoutProperty('pyrus_communis', 'visibility', 'visible');
  document.getElementById("pyrus_communisCB").checked = true;
  map.setLayoutProperty('quercus_coccinea', 'visibility', 'visible');
  document.getElementById("quercus_coccineaCB").checked = true;
  map.setLayoutProperty('quercus_faginea', 'visibility', 'visible');
  document.getElementById("quercus_fagineaCB").checked = true;
  map.setLayoutProperty('quercus_robur_fastigiata', 'visibility', 'visible');
  document.getElementById("quercus_robur_fastigiataCB").checked = true;
  map.setLayoutProperty('quercus_robur', 'visibility', 'visible');
  document.getElementById("quercus_roburCB").checked = true;
  map.setLayoutProperty('quercus_rubra', 'visibility', 'visible');
  document.getElementById("quercus_rubraCB").checked = true;
  map.setLayoutProperty('quercus_suber', 'visibility', 'visible');
  document.getElementById("quercus_suberCB").checked = true;
  map.setLayoutProperty('rhododendron_ponticum', 'visibility', 'visible');
  document.getElementById("rhododendron_ponticumCB").checked = true;
  map.setLayoutProperty('salix_alba', 'visibility', 'visible');
  document.getElementById("salix_albaCB").checked = true;
  map.setLayoutProperty('salix_atrocinerea', 'visibility', 'visible');
  document.getElementById("salix_atrocinereaCB").checked = true;
  map.setLayoutProperty('salix_babylonica', 'visibility', 'visible');
  document.getElementById("salix_babylonicaCB").checked = true;
  map.setLayoutProperty('salix_caprea', 'visibility', 'visible');
  document.getElementById("salix_capreaCB").checked = true;
  map.setLayoutProperty('sambucus_nigra', 'visibility', 'visible');
  document.getElementById("sambucus_nigraCB").checked = true;
  map.setLayoutProperty('schinus_molle', 'visibility', 'visible');
  document.getElementById("schinus_molleCB").checked = true;
  map.setLayoutProperty('tília_cordata', 'visibility', 'visible');
  document.getElementById("tília_cordataCB").checked = true;
  map.setLayoutProperty('tilia', 'visibility', 'visible');
  document.getElementById("tiliaCB").checked = true;
  map.setLayoutProperty('ulmus_minor', 'visibility', 'visible');
  document.getElementById("ulmus_minorCB").checked = true;
  map.setLayoutProperty('washingtonia_filifera', 'visibility', 'visible');
  document.getElementById("washingtonia_filiferaCB").checked = true;

}

let showLabels = true;

function handleClickHideLabels() {
  const elem = document.getElementById('labels');
  if (showLabels) {
    elem.classList.add('hide-labels');
    showLabels = false;
  } else {
    elem.classList.remove('hide-labels');
    showLabels = true;
  }
}



var modal = document.getElementById("myModal");
var mofa = document.getElementById("legenda")
// Get the button that opens the modal
var btn = document.getElementById("myBtn");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
  mofa.style.display = "none";

}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
  mofa.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    mofa.style.display = "block";
  }
}
var nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-left');
map.addControl(new mapboxgl.FullscreenControl());

map.addControl(new mapboxgl.GeolocateControl({
  positionOptions: {
    enableHighAccuracy: true
  },
  trackUserLocation: true,
  showUserHeading: true
}));