const { createBot, createProvider, createFlow, addKeyword, EVENTS } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const flowAsesorLlamada = addKeyword(['1']).addAnswer(
    [
        '¡Genial! Un asesor se estara contactando por _*Llamada telefónica*_',
        '',
        'Gracias por contactarte con Pi Real Estate.'
    ]
)

const flowAsesorWpp = addKeyword(['2']).addAnswer(
    [
        '¡Genial! Un asesor se estara contactando por _*WhatsApp*_',
        '',
        'Gracias por contactarte con Pi Real Estate.'
    ]
)


const flowDespedida = addKeyword('gracias').addAnswer(
    [
        '¡De nada! Que tengas un buen día.'
    ]
)



const flowPrincipalCopia = addKeyword("Retroceder")
.addAnswer(
    [
        '¿Que buscas con tu inversión?',
        '',
        '1) Inversión 💰',
        '2) Vivienda 🏠'           
        
        
    ],
    {capture:true},
    async (ctx, {gotoFlow, fallBack}) => {
        
        if(ctx.body>2 || ctx.body <1){
            return fallBack('Respuesta Inválida. Las opciones deben ser menores a 4 y mayores a 1')
        }
        if(ctx.body==1){
            return gotoFlow(flowAnfitrion)
        }
        else if(ctx.body==2){
            return gotoFlow(flowAndro)
        }
        else{
            return fallBack('Respuesta Inválida, intente nuevamente ingresando un solo número, por ejemplo 1.')
        }
    }

)


const flowAnfitrion2 = addKeyword(['anfitrion', 'anfitrión', 'anf'])
    
    .addAnswer(
    [
        'El _*Edificio Anfitrión*_ es un proyecto inmobiliario *único* y *exclusivo* para alquiler temporario, ubicado en Mendoza - Argentina, Capital Internacional del Vino 🍷. Se encuentra en el corazón de la Quinta Sección, a metros del Parque Gral San Martín.',
    ],
)
    .addAnswer(
        '*Anfitrión* es un edificio cuyos departamentos podrán ser alquilados bajo la modalidad de *alquiler temporario* (ideal a través de Airbnb), lo que asegura una *rentabilidad en dólares*; por ejemplo, cada departamento puede ser dividido en 2 unidades independientes sin necesidad de ningún tipo de construcción adicional, lo que le brinda al inversor la posibilidad de maximizar la rentabilidad del alquiler 💰. La rentabilidad estimada por alquiler temporario es del *14,9%* - contra un *4,1%* que ofrece un alquiler tradicional -  y la rentabilidad patrimonial estimada es del *49%*.',
    )
    .addAnswer(
        'Además *Anfitrión* contará con una innovadora cañería de vino en cada departamento, lo que lo convierte en el primer edificio en el mundo con este sistema. Contará también con un *viñedo en terraza*, *cavas de vino subterráneas*, *SUM* y *exclusivo rooftop*, y *galería de objetos*.',
    )
    .addAnswer(
    [
        'A continuación, te envío un archivo con información de la empresa y otro archivo con información de relevancia del proyecto. Quedo a total disposición por cualquier inquietud o consulta que tengas.',
        '',
        '-Link de nuestro *video institucional*: https://pireal.com.ar/anfitrionlp/wp-content/uploads/2024/02/Video-Institucional-Pi-Real-Estate_H.mp4',
        '',
        '-Link del *Brochure*: https://pireal.com.ar/anfitrionlp/wp-content/uploads/2024/02/Anfitrion-Brochure-corto-2024.pdf',

        '',
        'Un *asesor comercial* te contactará lo *antes posible* para darte más detalles sobre esta increíble oportunidad de inversión. Gracias por contactarte con *Pi Real Estate*',
        '',
        
    ],
    null,
    null,
    [flowDespedida]
    
)

const flowAndro = addKeyword(['andro', '2'])
    .addAnswer('¡Excelente elección! Paso a contarte un poco más sobre esta oportunidad de vivienda')
    .addAnswer(
    [
        'Te mandamos nuestro brochure para que tengas más información acerca de este innovador proyecto para solterxs en Mendoza, Argentina llamado _*Andro*_.',
        '',
        '-Link: https://pireal.com.ar/anfitrionlp/wp-content/uploads/2024/02/Andro-Brochure-2024.pdf',
        '',
        'Un asesor se pondrá en contacto lo antes posible para brindarte más información y sacarte las dudas. Gracias por comunicarte con *Pi Real Estate*.',
        '',
        'Si querés ver otro proyecto de inversión 💰 escribí _*Anfitrión*_.'
    ],
    null,
    null,
    [flowDespedida, flowAnfitrion2]
)






const flowAndro2 = addKeyword(['andro', '2'])
   
    .addAnswer(
    [
        'Te mandamos nuestro brochure para que tengas más información acerca de este innovador proyecto para solterxs en Mendoza, Argentina llamado _*Andro*_.',
        '',
        '-Link: https://pireal.com.ar/anfitrionlp/wp-content/uploads/2024/02/Andro-Brochure-2024.pdf',
        '',
        'Un asesor se pondrá en contacto lo antes posible para brindarte más información y sacarte las dudas. Gracias por comunicarte con *Pi Real Estate*.',
        '',
        
    ],
    null,
    null,
    [flowDespedida]
)

const flowAnfitrion = addKeyword(['anfitrion', 'anfitrión', 'anf', 'anfitron', '1', '1)'])
    .addAnswer('¡Excelente elección! Paso a contarte un poco más acerca de esta increíble oportunidad de inversión')
    .addAnswer(
    [
        'El _*Edificio Anfitrión*_ es un proyecto inmobiliario *único* y *exclusivo* para alquiler temporario, ubicado en Mendoza - Argentina, Capital Internacional del Vino 🍷. Se encuentra en el corazón de la Quinta Sección, a metros del Parque Gral San Martín.',
    ],
)
    .addAnswer(
        '*Anfitrión* es un edificio cuyos departamentos podrán ser alquilados bajo la modalidad de *alquiler temporario* (ideal a través de Airbnb), lo que asegura una *rentabilidad en dólares*; por ejemplo, cada departamento puede ser dividido en 2 unidades independientes sin necesidad de ningún tipo de construcción adicional, lo que le brinda al inversor la posibilidad de maximizar la rentabilidad del alquiler 💰. La rentabilidad estimada por alquiler temporario es del *14,9%* - contra un *4,1%* que ofrece un alquiler tradicional -  y la rentabilidad patrimonial estimada es del *49%*.',
    )
    .addAnswer(
        'Además *Anfitrión* contará con una innovadora cañería de vino en cada departamento, lo que lo convierte en el primer edificio en el mundo con este sistema. Contará también con un *viñedo en terraza*, *cavas de vino subterráneas*, *SUM* y *exclusivo rooftop*, y *galería de objetos*.',
    )
    .addAnswer(
    [
        'A continuación, te envío un archivo con información de la empresa y otro archivo con información de relevancia del proyecto. Quedo a total disposición por cualquier inquietud o consulta que tengas.',
        '',
        '-Link de nuestro *video institucional*: https://pireal.com.ar/anfitrionlp/wp-content/uploads/2024/02/Video-Institucional-Pi-Real-Estate_H.mp4',
        '',
        '-Link del *Brochure*: https://pireal.com.ar/anfitrionlp/wp-content/uploads/2024/02/Anfitrion-Brochure-corto-2024.pdf',

        '',
        'Un *asesor comercial* te contactará lo *antes posible* para darte más detalles sobre esta increíble oportunidad de inversión. Gracias por contactarte con *Pi Real Estate*',
        '',
        'Si querés ver nuestro otro proyecto de vivienda 🏠 escribí _*Andro*_.'
    ],
    null,
    null,
    [flowAndro2, flowDespedida]
    
)



const flowPrincipal = addKeyword(EVENTS.WELCOME)
    .addAnswer(['¡Hola! Me presento: mi nombre es Pilar, soy la asistente de _*Pi Real Estate*_.',
        '',
        'Para empezar, ¿Podrías indicarme tu *nombre* por favor? ',
    ],
    {capture: true},
    async (ctx, {flowDynamic, state}) => {
        await state.update({name: ctx.body})
    
        await flowDynamic(`¡Gracias por tus datos!`)
    }
    )
    .addAnswer(
        [
            '¿Que buscas con tu inversión?',
            '',
            '1) Inversión 💰',
            '2) Vivienda 🏠'           
            
            
        ],
        {capture:true},
        async (ctx, {gotoFlow, fallBack}) => {
            
            if(ctx.body>2 || ctx.body <1){
                return fallBack('Respuesta Inválida. Las opciones deben ser menores a 4 y mayores a 1')
            }
            if(ctx.body==1){
                return gotoFlow(flowAnfitrion)
            }
            else if(ctx.body==2){
                return gotoFlow(flowAndro)
            }
            else{
                return fallBack('Respuesta Inválida, intente nuevamente ingresando un solo número, por ejemplo 1.')
            }
        }

)

const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
