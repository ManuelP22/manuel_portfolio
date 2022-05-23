export default {
    name:'testimonios',
    title:'Testimonios',
    type: 'document',
    fields:[
        { 
            name:'nombre',
            title:'Nombre',
            type: 'string'
        },
        {
            name:'empresa',
            title:'Empresa',
            type:'string'
        },
        {
            name:'imgurl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },  
        {
            name:'feedback',
            title:'Feedback',
            type:'string'
        }
    ]
}