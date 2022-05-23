export default{
    name:'about',
    title:'Quien Soy',
    type: 'document',
    fields:[
        {
            name:'titulo',
            title:'Titulo',
            type:'string'
        },
        {
            name:'descripcion',
            title:'Descripcion',
            type:'string'
        },
        {
            name:'imgUrl',
            title:'ImgUrl',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}