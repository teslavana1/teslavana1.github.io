import fw2000 from '../images/fw2000.png'
import arcadiafront from '../images/arcadiafront2.png'
import arcadiaback from '../images/arcadiaback.png'
import splitterfront from '../images/splitterfront2.png'
import splitterback from '../images/splitterback2.png'
import fw2010 from '../images/fw2010mount.png'
import v32ldright from '../images/v32ldright.png'
import fsiibpfront from '../images/fsiibp.png'
import mt701 from '../images/mt701.png'
import pic4744 from '../images/pic4744.png'
import nexeo from '../images/nexeo.png'
import ac70 from '../images/ac70.png'
import inseego from '../images/inseego.png'
import hme from '../images/hme.png'
import clearcom from '../images/clearcom.png'
import metaquest3s from '../images/metaquest3s.png'

const products = [
    {
        wide: false,
        src: [metaquest3s],
        company: 'Meta',
        title: 'Meta Quest 3S',
        body: '',
        bullets: [
            'DVT, PVT, MP build support',
            'RDVT issue RCA',
            'PRQ implementation',
            'Tolerance analysis',
            '3D-printed fixture design',
            'Injection-molded plastic',
            'BOM management',
            'Part and assembly CAD',
            'Asia-based supply chain',
            'Siemens NX and TeamCenter'
        ],
        productUrl: 'https://www.meta.com/quest/quest-3s/?srsltid=AfmBOor6EM2i81CuuiFgRA6FkrovAjqYIXfp7KYhrI-IjfJprA4W0ZNU'
    },

    {
        wide: true,
        src: [arcadiafront, arcadiaback],
        company: 'HM Electronics Inc',
        title: 'Arcadia Main Station',
        body: '',
        bullets: [
            'Industrial design',
            'PCA layout',
            'Sheet metal housings',
            'Plastic front bezel',
            'Thermal analysis',
            'Modular fan panel',
            'Part and assembly CAD',
            'Design verification testing',
            'Autodesk Inventor',
            'Adobe Illustrator'
        ],
        productUrl: 'https://www.clearcom.com/Product/category/central-station/arcadia-central-station?id=34498'
    },

    {
        wide: false,
        src: [nexeo],
        company: 'HM Electronics Inc',
        title: 'Nexeo BS7000',
        bullets: [
            'Industrial design',
            "PCA layout",
            'Plastic housings',
            'Cable routing',
            'Part and assembly CAD',
            'Custom touchscreen design',
            'Design verification testing',
            'Autodesk Inventor',
            'Adobe Illustrator'
        ],
        body: 'The FreeSpeak II Splitter (FSII-SPL) is a device that connects multiple antennas to a main station. It is  As one of my first projects at HME, I designed the FSII-SPL from concept to production. This included creating the ID, plastic housings, PCB layout, labels, assembly instructions, and performing the QA testing.',
        productUrl: 'https://www.hme.com/qsr/drive-thru-headsets-NEXEO/'
    },

    {
        wide: false,
        src: [splitterfront, splitterback],
        company: 'HM Electronics Inc',
        title: 'FreeSpeak II Splitter',
        bullets: [
            'Industrial design',
            "PCA layout",
            'Plastic housings',
            'Material selection',
            'Part and assembly CAD',
            'IP testing',
            'Design verification testing',
            'Autodesk Inventor',
            'Adobe Illustrator'
        ],
        body: 'The FreeSpeak II Splitter (FSII-SPL) is a device that connects multiple antennas to a main station. It is  As one of my first projects at HME, I designed the FSII-SPL from concept to production. This included creating the ID, plastic housings, PCB layout, labels, assembly instructions, and performing the QA testing.',
        productUrl: 'https://www.clearcom.com/Product/category/transceivers-splitter/fsii-spl?id=1925'
    },

    {
        wide: false,
        src: [fw2000],
        company: 'Inseego Corp',
        title: 'FW2000',
        body: '',
        bullets: [
            'Pre-release troubleshooting',
            'Part and assembly CAD',
            'Rework for antenna testing',
            'IP testing',
            'Design verification testing',
            'CREO/ProE'
        ],
        productUrl: 'https://inseego.com/products/5g-outdoor-cpe/fw2000/'
    },

    {
        wide: false,
        src: [fw2010],
        company: 'Inseego Corp',
        title: 'FW2010',
        body: '',
        bullets: [
            'Pre-release troubleshooting',
            'Rework for antenna testing',
            'Rework instructions',
            'Design Verification Testing',
            'CREO/ProE'
        ],
        productUrl: 'https://inseego.com/products/5g-outdoor-cpe/fw2010/'
    },

    // {
    //     wide: true,
    //     src: [v32ldfront, v32ldback],
    //     company: 'HM Electronics, Inc.',
    //     title: 'V32LD',
    //     body: '',
    //     bullets: [
    //         'Industrial design',
    //         'Update existing product',
    //         'Sheet metal housings',
    //         'Plastic front bezels',
    //         'Part and assembly CAD',
    //         'Design verification testing',
    //         'Autodesk Inventor',
    //         'Adobe Illustrator'
    //     ],
    //     productUrl: 'https://www.clearcom.com/product/v32ld/'
    // },

    {
        wide: false,
        src: [v32ldright],
        company: 'HM Electronics Inc',
        title: 'V32LD',
        body: '',
        bullets: [
            'Industrial design',
            'Update existing product',
            'Sheet metal housings',
            'Plastic front bezels',
            'Part and assembly CAD',
            'Design verification testing',
            'Autodesk Inventor',
            'Adobe Illustrator'
        ],
        productUrl: 'https://www.clearcom.com/Product/category/v-series-keypanels/v32ld-ltb?id=1994'
    },

    {
        wide: false,
        src: [fsiibpfront],
        company: 'HM Electronics Inc',
        title: 'Hyperbaric Beltpack',
        body: '',
        bullets: [
            'Managed interdisciplinary team',
            'Enhanced existing product',
            'High pressure testing',
            'Part and assembly drawings',
            'Design verification testing',
            'Autodesk Inventor',
            'Adobe Illustrator'
        ],
        productUrl: 'https://www.clearcom.com/Product/category/beltpacks/fsii-bp24-o2-1?id=26315'
    },
    
    {
        wide: true,
        src: [pic4744],
        company: 'HM Electronics Inc',
        title: 'PIC-4744',
        body: '',
        bullets: [
            'PCA layout',
            'Sheet metal housings',
            'Part and assembly CAD',
            'Design verification testing',
            'Autodesk Inventor',
            'Adobe Illustrator'
        ],
        productUrl: 'https://www.clearcom.com/Product/category/ifb-and-commentator/pic-4744?id=1587'
    },

    {
        wide: false,
        src: [mt701],
        company: 'HM Electronics Inc',
        title: 'MT-701',
        body: '',
        bullets: [
            'PCA layout',
            'Customized off the shelf housing',
            'Part and assembly CAD',
            'Design verification testing',
            'Autodesk Inventor',
            'Adobe Illustrator'
        ],
        productUrl: 'https://www.clearcom.com/Product/category/accessories/mt-701?id=1583'
    },

    {
        wide: false,
        src: [ac70],
        company: 'HM Electronics Inc',
        title: 'Nexeo AC70',
        bullets: [
            'Industrial design',
            "PCA layout",
            'Plastic housings',
            'Part and assembly CAD',
            'Design verification testing',
            'Autodesk Inventor',
            'Adobe Illustrator'
        ],
        body: 'The FreeSpeak II Splitter (FSII-SPL) is a device that connects multiple antennas to a main station. It is  As one of my first projects at HME, I designed the FSII-SPL from concept to production. This included creating the ID, plastic housings, PCB layout, labels, assembly instructions, and performing the QA testing.',
        productUrl: 'https://www.hme.com/qsr/drive-thru-headsets-NEXEO/'
    }

]

for (let product of products) {
    if (product.company === 'HM Electronics Inc') {
        product.logo = hme
    } else if (product.company === 'Inseego Corp' ) {
        product.logo = inseego
    } else {
        product.logo = clearcom
    }
}

export default products