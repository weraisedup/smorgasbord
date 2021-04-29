const InitData = {
    tasks: {
        'task-1': {id: 'task-1', content: 'gabrage'},
        'task-2': {id: 'task-2', content: 'podcast'},
        'task-3': {id: 'task-3', content: 'games'},
        'task-4': {id: 'task-4', content: 'weed'}
    },
    columns: {
        'column-1': {
            id: 'column-2',
            title: 'To Do',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'Doing',
            taskIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Done Did',
            taskIds: []
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
}

export default InitData