export default{
    name:'experiencias',
    title:'Experiencias',
    type: 'document',
    fields:[
        {
            name:'tiempo',
            title:'Tiempo',
            type:'string'
        },
        {
            name:'trabajos',
            title:'Trabajos',
            type:'array',
            of:[{ type:'workExperience'}]
        },
    ]
}