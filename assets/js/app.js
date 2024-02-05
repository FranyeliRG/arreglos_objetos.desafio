/*PROPIEDADES EN VENTA */

const propiedadesEnVenta = [
    {
        nombre: 'Apartamento de Lujo en zona exclusiva',
        src: 'https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg',
        descripcion: 'Este apartamento de lujo está ubicado en una exclusiva zona residencial',
        ubicacion: '123 Luxury Lane, Prestige Suburb, CA 45678',
        habitaciones: 4,
        baños: 4,
        costo: '5.000',
        smoke: false,
        pets: false
    },
    {
        nombre: 'Apartamento acogedor en la montaña',
        src: 'https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg',
        descripcion: 'Este apartamento acogedor está situado en lo alto de una montaña con impresionantes vistas',
        ubicacion: '789 Mountain Road, Summit Peaks, CA 23456',
        habitaciones: 2,
        baños: 1,
        costo: '1.200',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Penthouse de lujo con terraza panorámica',
        src: 'https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg',
        descripcion: 'Este penthouse de lujo ofrece una terraza panorámica con vistas espectaculares',
        ubicacion: '567 Skyline Avenue, Skyview City, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: '4.500',
        smoke: false,
        pets: true
    },
    {
        nombre: 'Hermosa casa al borde de playa privada',
        src: 'https://images.unsplash.com/photo-1511840636560-acee95b3a83f?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Casa al borde de una playa privada te permmite disfrutar de un clima incomparable y tener la paz que tanto buscas',
        ubicacion: 'Puerto Cancún, 243, México',
        habitaciones: 5,
        baños: 3,
        costo: '6.800',
        smoke: true,
        pets: true
    },

]

const ventas = document.querySelector('#propiedadesVenta')
let templateVentas = ''

for (let venta of propiedadesEnVenta) {
    templateVentas += `
    <div class="col-md-3 mb-3">
    <div class="card ms-2" style="width: 22rem" height="100px;"">
      <img src="${venta.src}" class="card-img-top" width="100px" height="300px" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">
          ${venta.nombre}
        </h5>
        <p class="card-text">
          ${venta.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${venta.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${venta.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${venta.baños} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${venta.costo}</p>
        <p class='${venta.smoke == true ? "text-success" : "text-danger"}'>
        <i class="fas fa-smoking-ban"></i> 
        ${venta.smoke == true ? "Permitido Fumar" : "Prohibido Fumar"}
        </p>
        <p class='${venta.pets == true ? "text-success" : "text-danger"}'>
        <i class="fas fa-ban"></i>
        ${venta.pets == true ? "Se Admiten Mascotas" : "No se Admiten Mascotas"}
        </p>
        <a href="#" class="btn btn-dark">Ver mas propiedades</a>
      </div>
    </div>

  </div>
    `
}


if(ventas != null){
  ventas.innerHTML = templateVentas
}

/*PROPIEDADES EN ALQUILER */

const propiedades_alquiler = [
    {
        nombre: 'Apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXBhcnRtZW50fGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=700&q=60',
        descripcion: 'Este apartamento de 2 habitaciones está ubicado en el corazón de la ciudad, cerca de todo',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: '2.000',
        smoke: false,
        pets: true
    },
    {
        nombre: 'Apartamento Luminoso con vista al mar',
        src: 'https://images.unsplash.com/photo-1669071192880-0a94316e6e09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
        descripcion: 'Este hermoso apartamento ofrece una vista impresionante al mar',
        ubicacion: '456 Ocean Avenue, Seaside Town, CA 56789',
        habitaciones: 3,
        baños: 3,
        costo: '2.500',
        smoke: true,
        pets: true
    },
    {
        nombre: 'Condominio moderno en zona residencial',
        src: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbmRvfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60',
        descripcion: 'Este elegante condominio moderno está ubicado en una tranquila zona residencial',
        ubicacion: '123 Main Street, Anytown, CA 91234',
        habitaciones: 2,
        baños: 2,
        costo: '2.200',
        smoke: false,
        pets: false
    },
    {
        nombre: 'Cómodo apartamento en el centro de la ciudad',
        src: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        descripcion: 'Este apartamento cuenta con estaciones de tren y comercios a su alrededor, brindando la comodidad e iluminación adecuada',
        ubicacion: '506 Street Center, Downtown, CA 54891',
        habitaciones: 2,
        baños: 1,
        costo: '1.800',
        smoke: false,
        pets: false
    }
]


const alquiler = document.querySelector('#propiedadesAlquiler')
let templateAlquiler = ''

for (let alquiler of propiedades_alquiler) {
    templateAlquiler += `
    <div class="col-md-3 mb-3">
    <div class="card ms-2" style="width: 22rem" height="100px;"">
      <img
        src="${alquiler.src}"
        class="card-img-top" width="100px" height="300px"
        alt="..."
      />
      <div class="card-body">
        <h5 class="card-title">
          ${alquiler.nombre}
        </h5>
        <p class="card-text">
          ${alquiler.descripcion}
        </p>
        <p>
          <i class="fas fa-map-marker-alt"></i> ${alquiler.ubicacion}
        </p>
        <p>
          <i class="fas fa-bed"></i> ${alquiler.habitaciones} Habitaciones |
          <i class="fas fa-bath"></i> ${alquiler.baños} Baños
        </p>
        <p><i class="fas fa-dollar-sign"></i> ${alquiler.costo}</p>
        <p class='${alquiler.smoke == true ? "text-success" : "text-danger"}'>
        <i class="fas fa-smoking-ban"></i> 
        ${alquiler.smoke == true ? "Permitido Fumar" : "Prohibido Fumar"}
        </p>
        <p class='${alquiler.pets == true ? "text-success" : "text-danger"}'>
        <i class="fas fa-ban"></i>
        ${alquiler.pets == true ? "Se Admiten Mascotas" : "No se Admiten Mascotas"}
        </p>
        <a href="#" class="btn btn-dark">Ver mas propiedades</a>
      </div>
    </div>

  </div>
    `
}

if(alquiler != null){
  alquiler.innerHTML = templateAlquiler
}