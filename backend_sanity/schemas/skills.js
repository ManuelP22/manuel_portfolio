export default{
    name:'habilidades',
    title:'Habilidades',
    type: 'document',
    fields:[
        {
            name:'nombre',
            title:'Nombre',
            type:'string'
        },
        {
            name:'bgColor',
            title:'BgColor',
            type:'string'
        },
        {
            name:'icono',
            title:'Icono',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        
    ]
}