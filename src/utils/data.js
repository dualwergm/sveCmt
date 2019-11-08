const testData = {
    cmts: [
        {
            id: 1,
            name: 'Participar en la reunión de inicio',
            description: 'Participar en la reunión de inicio Participar en la reunión de inicio',
            source: 2,
            state: 1,
            forapprove: 3,
            limitDate: '19/Jul/2019'
        },
        {
            id: 2,
            name: 'Prueba de que si se puede crear un compromiso de indicadores',
            description: 'Prueba de que si se puede crear un compromiso de indicadores Prueba de que si se puede crear un compromiso de indicadores',
            source: 0,
            state: 2,
            forapprove: 0,
            limitDate: '19/Jul/2019'
        },
        {
            id: 3,
            name: 'Compromiso eduardo con aprobador por defecto',
            description: 'Compromiso eduardo con aprobador por defecto Compromiso eduardo con aprobador por defecto Compromiso eduardo con aprobador por defecto',
            source: 2048,
            state: 3,
            forapprove: 1,
            limitDate: '19/Jul/2019'
        },
        {
            id: 4,
            name: 'compromiso aprueba admin, responsable alguien mas, recurso eduardotodo',
            description: 'compromiso aprueba admin, responsable alguien mas, recurso eduardotodo compromiso aprueba admin, responsable alguien mas, recurso eduardotodo',
            source: 4096,
            state: 0,
            forapprove: 2,
            limitDate: '19/Jul/2019'
        },
        {
            id: 5,
            name: 'Compromiso con el admin para eduardoTodo colaborador eduardoTodo',
            description: 'Compromiso con el admin para eduardoTodo colaborador eduardoTodo Compromiso con el admin para eduardoTodo colaborador eduardoTodo',
            source: 2048,
            state: 4,
            forapprove: 3,
            limitDate: '19/Jul/2019'
        },
        {
            id: 6,
            name: 'Compromiso eduardo desde compromisos-2',
            description: 'Compromiso eduardo desde compromisos-2 Compromiso eduardo desde compromisos-2 Compromiso eduardo desde compromisos-2',
            source: 2,
            state: 0,
            forapprove: 1,
            limitDate: '19/Jul/2019'
        },
        {
            id: 7,
            name: 'Compromiso pa ver como guarda el show_cmt',
            description: 'Compromiso pa ver como guarda el show_cmt Compromiso pa ver como guarda el show_cmt',
            source: 2,
            state: 1,
            forapprove: 2,
            limitDate: '19/Jul/2019'
        },
    ],
    labels: [
        {
            id: 1,
            name: 'label 1111'
        },
        {
            id: 2,
            name: 'label 2222'
        },
        {
            id: 3,
            name: 'label 33333'
        },
        {
            id: 4,
            name: 'label 44444'
        },
        {
            id: 5,
            name: 'label 5555'
        },
        {
            id: 6,
            name: 'label 5555'
        },
        {
            id: 7,
            name: 'label 5555'
        },
        {
            id: 8,
            name: 'label 5555'
        },
        {
            id: 9,
            name: 'label extra long, this is a test with long labels, label extra long'
        },
        {
            id: 10,
            name: 'label 5555'
        },
    ],
    highlighters: [
        {
            id: 1,
            color: 'rgba(101, 168, 255, 0.9)',
            bgcolor: 'rgba(101, 168, 255, 0.5)'
        },
        {
            id: 2,
            color: 'rgba(255, 131, 131, 0.9)',
            bgcolor: 'rgba(255, 131, 131, 0.5)'
        },
        {
            id: 3,
            color: 'rgba(255, 225, 134, 0.9)',
            bgcolor: 'rgba(255, 225, 134, 0.5)'
        },
        {
            id: 4,
            color: 'rgba(0, 223, 195, 0.9)',
            bgcolor: 'rgba(0, 223, 195, 0.5)'
        }
    ]
};

export default testData;