
import lodash from 'lodash'

export const state = () => ({
    storeId:'',
    selectedState: '',
    selectedArea: {},
    counter:0,
    message:'',
    isStoreSetup: false,
    isStoreMenuSetup: false,
    newOrders:[],
    localGovt: [],
    StatesArea: [
        {
            "state": {
                "name": "Osun State",
                "id": 30,
                "geocode": {
                    lng: 4.179992634,
                    lat: 7.629959329
                },
                       
                "locals": [
                    {
                        "id_customer_address_city":"1018",
                        "name":"ARAKEJI",
                        "geocode": {
                            "lat": 7.431375,
                            "lng": 4.949729
                        }
                    },
                    {
                        "id_customer_address_city":"75",
                        "name":"EDE",
                        "geocode": {
                            "lat": 7.737737,
                            "lng":4.438647
                        }
                    },
                    {
                        "id_customer_address_city":"1015",
                        "name":"EJIGBO (Osun)",
                        "geocode": {
                            "lat": 7.905559,
                            "lng": 4.305266
                        }
                    },
                    {
                        "id_customer_address_city":"1020",
                        "name":"ESAOKE",
                        "geocode": {
                            "lat": 7.759537,
                            "lng": 4.895971
                        }
                    },
                    {
                        "id_customer_address_city":"1019",
                        "name":"IJEBU-JESA",
                        "geocode": {
                            "lat": 7.680392,
                            "lng": 4.811185
                        }
                    },
                    {
                        "id_customer_address_city":"129",
                        "name":"IKIRE",
                        "geocode": {
                            "lat": 7.370242,
                            "lng": 4.186900
                        }
                    },
                    {
                        "id_customer_address_city":"1014",
                        "name":"IKIRUN",
                        "geocode": {
                            "lat": 7.926677,
                            "lng": 4.665108
                        }
                    },
                    {
                        "id_customer_address_city":"1017",
                        "name":"ILA",
                        "geocode": {
                            "lat": 8.034308,
                            "lng": 4.963213
                        }
                    },
                    {
                        "id_customer_address_city":"140",
                        "name":"ILA-ORANGUN",
                        "geocode": {
                            "lat": 8.012655,
                            "lng": 4.902906
                        }
                    },
                    {
                        "id_customer_address_city":"1732",
                        "name":"ILE-IFE - Adesanmi",
                        "geocode": {
                            "lat": 7.497286,
                            "lng": 4.515043
                        }
                    },
                    {
                        "id_customer_address_city":"1733",
                        "name":"ILE-IFE - Ajebamidele",
                        "geocode": {
                            "lat": 7.496849,
                            "lng": 4.504057
                        }
                    },
                    {
                        "id_customer_address_city":"1735",
                        "name":"ILE-IFE - AKARABATA",
                        "geocode": {
                            "lat": 7.486440,
                            "lng": 4.545511
                        }
                    },
                    {
                        "id_customer_address_city":"1736",
                        "name":"ILE-IFE - AP",
                        "geocode": {
                            "lat": 7.488862,
                            "lng": 4.537321
                        }
                    },
                    {
                        "id_customer_address_city":"1737",
                        "name":"ILE-IFE - Aserifa",
                        "geocode": {
                            "lat": 7.493307,
                            "lng": 4.520256
                        }
                    },
                    {
                        "id_customer_address_city":"1738",
                        "name":"ILE-IFE - Awoyeku",
                        "geocode": {
                            "lat": 7.499297,
                            "lng":  4.551706
                        }
                    },
                    {
                        "id_customer_address_city":"1739",
                        "name":"ILE-IFE - Ede Road",
                        "geocode": {
                            "lat": 7.494030,
                            "lng": 4.527601
                        }
                    },
                    {
                        "id_customer_address_city":"1741",
                        "name":"ILE-IFE - Eleyele",
                        "geocode": {
                            "lat": 7.490685,
                            "lng": 4.545671
                        }
                    },
                    {
                        "id_customer_address_city":"1742",
                        "name":"ILE-IFE - Ilesa garage\/OAUTH",
                        "geocode": {
                            "lat": 7.496545,
                            "lng": 4.569244
                        }
                    },
                    {
                        "id_customer_address_city":"1743",
                        "name":"ILE-IFE - Iremo",
                        "geocode": {
                            "lat": 7.485278,
                            "lng": 4.553683
                        }
                    },
                    {
                        "id_customer_address_city":"1744",
                        "name":"ILE-IFE - Lagere",
                        "geocode": {
                            "lat": 7.485880,
                            "lng": 4.545352
                        }
                    },
                    {
                        "id_customer_address_city":"1746",
                        "name":"ILE-IFE - Mayfair",
                        "geocode": {
                            "lat": 7.489664,
                            "lng": 4.532384
                        }
                    },
                    {
                        "id_customer_address_city":"1747",
                        "name":"ILE-IFE - Modomo",
                        "geocode": {
                            "lat": 7.483787,
                            "lng": 4.561157
                        }
                    },
                    {
                        "id_customer_address_city":"1748",
                        "name":"ILE-IFE - Mokuro",
                        "geocode": {
                            "lat": 7.497255,
                            "lng": 4.580803
                        }
                    },
                    {
                        "id_customer_address_city":"1740",
                        "name":"ILE-IFE - Moro\/Edunabon\/Ipetumodu",
                        "geocode": {
                            "lat": 7.518061,
                            "lng": 4.526175
                        }
                    },
                    {
                        "id_customer_address_city":"1749",
                        "name":"ILE-IFE - NTA",
                        "geocode": {
                            "lat": 7.499539,
                            "lng": 4.589955
                        }
                    },
                    {
                        "id_customer_address_city":"1750",
                        "name":"ILE-IFE - OAU Community",
                        "geocode": {
                            "lat": 7.516848,
                            "lng": 4.528872
                        }
                    },
                    {
                        "id_customer_address_city":"1751",
                        "name":"ILE-IFE - Oduduwa University",
                        "geocode": {
                            "lat": 7.492493,
                            "lng": 4.537100
                        }
                    },
                    {
                        "id_customer_address_city":"1752",
                        "name":"ILE-IFE - Oke D.O",
                        "geocode": {
                            "lat": 7.486155,
                            "lng": 4.532837
                        }
                        
                    },
                    {
                        "id_customer_address_city":"1753",
                        "name":"ILE-IFE - Omole",
                        "geocode": {
                            "lat": 7.488447,
                            "lng": 4.530899
                        }
                    },
                    {
                        "id_customer_address_city":"1754",
                        "name":"ILE-IFE - Opa",
                        "geocode": {
                            "lat": 7.503974,
                            "lng": 4.528455
                        }
                    },
                    {
                        "id_customer_address_city":"1755",
                        "name":"ILE-IFE - Our Ladies Modakeke",
                        "geocode": {
                            "lat": 7.477453,
                            "lng": 4.544252
                        }
                    },
                    {
                        "id_customer_address_city":"1756",
                        "name":"ILE-IFE - Parakin",
                        "geocode": {
                            "lat": 7.493530,
                            "lng": 4.531926
                        }
                    },
                    {
                        "id_customer_address_city":"1757",
                        "name":"ILE-IFE - Post Office\/Sabo",
                        "geocode": {
                            "lat": 7.486894,
                            "lng": 4.548536
                        }
                    },
                    {
                        "id_customer_address_city":"142",
                        "name":"ILESHA",
                        "geocode": {
                            "lat": 7.640132,
                            "lng": 4.757594
                        }
                    },
                    {
                        "id_customer_address_city":"144",
                        "name":"ILOKO",
                        "geocode": {
                            "lat": 7.646660,
                            "lng": 4.816046
                        }
                    },
                    {
                        "id_customer_address_city":"149",
                        "name":"IREE",
                        "geocode": {
                            "lat": 7.940320,
                            "lng": 4.731416
                        }
                    },
                    {
                        "id_customer_address_city":"1734",
                        "name":"Iwo",
                        "geocode": {
                            "lat": 7.630562,
                            "lng": 4.187206
                        }
                    },
                    {
                        "id_customer_address_city":"1012",
                        "name":"IWO (Osun)",
                        "geocode": {
                            "lat": 7.628521,
                            "lng": 4.200939
                        }
                    },
                    {
                        "id_customer_address_city":"1016",
                        "name":"OKUKU",
                        "geocode": {
                            "lat": 8.020624,
                            "lng": 4.678223
                        }
                    },
                    {
                        "id_customer_address_city":"266",
                        "name":"OSHOGBO-CENTRAL LOCATIONS",
                        "geocode": {
                            "lat": 7.768178,
                            "lng": 4.566940
                        }
                    },
                    {
                        "id_customer_address_city":"267",
                        "name":"OSOGBO",
                        "geocode": {
                            "lat": 7.784993,
                            "lng": 4.544281
                        }
                    },
                    {
                        "id_customer_address_city":"1697",
                        "name":"OSOGBO - Abere",
                        "geocode": {
                            "lat": 7.743079,
                            "lng": 4.487798
                        }
                    },
                    {
                        "id_customer_address_city":"1697",
                        "name":"OSOGBO - Aregbe",
                        "geocode": {
                            "lat": 7.769194,
                            "lng": 4.541015
                        }
                    },
                   
                    {
                        "id_customer_address_city":"1725",
                        "name":"OSOGBO - Agunbelewo",
                        "geocode": {
                            "lat": 7.814631,
                            "lng": 4.529886
                        }
                    },
                    {
                        "id_customer_address_city":"1698",
                        "name":"OSOGBO - Dada Estate",
                        "geocode": {
                            "lat": 7.792580,
                            "lng": 4.522366
                        }
                    },
                    {
                        "id_customer_address_city":"1698",
                        "name":"OSOGBO - Fakunle",
                        "geocode": {
                            "lat": 7.795614,
                            "lng": 4.576273
                        }
                    },
                    {
                        "id_customer_address_city":"1699",
                        "name":"OSOGBO - Igbona",
                        "geocode": {
                            "lat": 7.781182,
                            "lng": 4.558071
                        }
                    },
                    {
                        "id_customer_address_city":"1711",
                        "name":"OSOGBO - Iludun",
                        "geocode": {
                            "lat": 7.789443,
                            "lng": 4.577051
                        }
                    },
                    {
                        "id_customer_address_city":"1726",
                        "name":"OSOGBO - Kobo",
                        "geocode": {
                            "lat": 7.831403,
                            "lng": 4.597884
                        }
                    },
                    {
                        "id_customer_address_city":"1713",
                        "name":"OSOGBO - Ofatedo",
                        "geocode": {
                            "lat": 7.768943,
                            "lng": 4.511018
                        }
                    },
                    {
                        "id_customer_address_city":"1709",
                        "name":"OSOGBO - Ogo-Oluwa",
                        "geocode": {
                            "lat": 7.765211,
                            "lng": 4.534793
                        }
                    },
                    {
                        "id_customer_address_city":"1700",
                        "name":"OSOGBO - Oke-Baale",
                        "geocode": {
                            "lat": 7.765504,
                            "lng": 4.572024
                        }
                    },
                    {
                        "id_customer_address_city":"1702",
                        "name":"OSOGBO - Oke-Fia",
                        "geocode": {
                            "lat": 7.783194,
                            "lng": 4.546713
                        }
                    },
                    {
                        "id_customer_address_city":"1724",
                        "name":"OSOGBO - Okinni",
                        "geocode": {
                            "lat": 7.835322,
                            "lng": 4.529883
                        }
                    },
                    {
                        "id_customer_address_city":"1727",
                        "name":"OSOGBO - Old Garage",
                        "geocode": {
                            "lat": 7.782304,
                            "lng": 4.549756
                        }
                    },
                    {
                        "id_customer_address_city":"1728",
                        "name":"OSOGBO - Olaiya",
                        "geocode": {
                            "lat": 7.782089,
                            "lng": 4.548984
                        }
                    },
                    {
                        "id_customer_address_city":"1728",
                        "name":"OSOGBO - Olosan",
                        "geocode": {
                            "lat": 7.784395,
                            "lng": 4.544435
                        }
                    },
                    {
                        "id_customer_address_city":"1729",
                        "name":"OSOGBO - Orisunmibare",
                        "geocode": {
                            "lat": 7.781050,
                            "lng": 4.549649
                        }
                    },
                    {
                        "id_customer_address_city":"1730",
                        "name":"OSOGBO - Orita Gbemu",
                        "geocode": {
                            "lat": 7.771880,
                            "lng": 4.556129
                        }
                    },
                    {
                        "id_customer_address_city":"1710",
                        "name":"OSOGBO - Ota-Efun",
                        "geocode": {
                            "lat": 7.821480,
                            "lng": 4.586759
                        }
                    },
                    {
                        "id_customer_address_city":"1731",
                        "name":"OSOGBO - Powerline",
                        "geocode": {
                            "lat": 7.791949,
                            "lng": 4.585278
                        }
                    },
                    {
                        "id_customer_address_city":"1717",
                        "name":"OSOGBO - Ring Road",
                        "geocode": {
                            "lat": 7.795553,
                            "lng": 4.540386
                        }
                    },
                    {
                        "id_customer_address_city":"1717",
                        "name":"OWODE EDE",
                        "geocode": {
                            "lat": 7.712990,
                            "lng":  4.493665
                        }
                    }
                   
                ]
            }
        },
        ],

    store:{},
    FoodExtraInput:{},

  Banks:[
    {
        "Id": 152,
        "Code": "050",
        "Name": "Ecobank Plc",
        "IsMobileVerified": null,
        "branches": null
    },

    {
        "Id": 137,
        "Code": "011",
        "Name": "First Bank of Nigeria",
        "IsMobileVerified": null,
        "branches": null
    },

    {
        "Id": 144,
        "Code": "070",
        "Name": "Fidelity Bank",
        "IsMobileVerified": null,
        "branches": null
    },


    {
        "Id": 151,
        "Code": "301",
        "Name": "JAIZ Bank",
        "IsMobileVerified": null,
        "branches": null
    },
   
    
        {
            "Id": 139,
            "Code": "990",
            "Name": "Omoluabi Mortgage Bank",
            "IsMobileVerified": null,
            "branches": null
        },

        {
            "Id": 141,
            "Code": "057",
            "Name": "Zenith Bank",
            "IsMobile  Verified": null,
            "branches": null
        },
        {
            "Id": 142,
            "Code": "068",
            "Name": "Standard Chartered Bank",
            "IsMobileVerified": null,
            "branches": null
        },

     
        {
            "Id": 146,
            "Code": "215",
            "Name": "Unity Bank",
            "IsMobileVerified": null,
            "branches": null
        },

        {
            "Id": 158,
            "Code": "221",
            "Name": "Stanbic IBTC Bank",
            "IsMobileVerified": null,
            "branches": null
        },


        {
            "Id": 168,
            "Code": "035",
            "Name": "Wema Bank",
            "IsMobileVerified": null,
            "branches": null
        },

        {
            "Id": 170,
            "Code": "063",
            "Name": "Diamond Bank",
            "IsMobileVerified": null,
            "branches": null
        },

        {
            "Id": 175,
            "Code": "030",
            "Name": "Heritage",
            "IsMobileVerified": null,
            "branches": null
        },

        {
            "Id": 177,
            "Code": "058",
            "Name": "GTBank Plc",
            "IsMobileVerified": null,
            "branches": null
        },
        {
            "Id": 178,
            "Code": "032",
            "Name": "Union Bank",
            "IsMobileVerified": null,
            "branches": null
        },
        {
            "Id": 179,
            "Code": "232",
            "Name": "Sterling Bank",
            "IsMobileVerified": null,
            "branches": null
        },
        {
            "Id": 180,
            "Code": "076",
            "Name": "Skye Bank",
            "IsMobileVerified": null,
            "branches": null
        },
        {
            "Id": 181,
            "Code": "082",
            "Name": "Keystone Bank",
            "IsMobileVerified": null,
            "branches": null
        },

        {
            "Id": 185,
            "Code": "313",
            "Name": "Mkudi",
            "IsMobileVerified": null,
            "branches": null
        },
        {
            "Id": 186,
            "Code": "214",
            "Name": "First City Monument Bank",
            "IsMobileVerified": null,
            "branches": null
        },

    
        {
            "Id": 190,
            "Code": "033",
            "Name": "United Bank for Africa",
            "IsMobileVerified": null,
            "branches": null
        },
        {
            "Id": 191,
            "Code": "044",
            "Name": "Access Bank",
            "IsMobileVerified": null,
            "branches": null
        },

    ],
})


export const mutations = {

    ADD_NEW_ORDER(state,payload){
        state.newOrders.unshift(payload)
    },

    REMOVE_NEW_ORDER(state,index){
        state.newOrders.splice(index,1)
    },

    SELECT_STATE(state, selectedstate) {
        state.selectedState = selectedstate;
    },
    
    SELECT_AREA(state, selectedarea) {
        state.selectedArea = selectedarea;
    },

    GET_LOCAL_GOVT(state, stateName) {

        state.localGovt = []
        const stateAreaObj = JSON.parse(JSON.stringify(state.StatesArea))


        const selectlocalGovt = stateAreaObj.find(states => states.state.name === stateName);
            console.log(selectlocalGovt.state.name);
            
        state.localGovt = selectlocalGovt.state.locals;
    },
    
    FOOD_EXTRA_INPUT(state,payload){

        state.FoodExtraInput = payload
    },


    STORE_SETUP_STATUS(state,val) {
        state.isStoreSetup = val
    },
    STORE_MENU_STATUS(state,val) {
        state.isStoreMenuSetup = val
    },

    STORE(state,payload){
        state.store = payload
    },

    MESSAGE(state,payload){
        state.message = payload
    },

    INCREASECOUNTER(state){
        state.counter ++;
    }


}

export const getters = {
    vendor: state => state.store,

    statesArea: state => state.StatesArea,

}