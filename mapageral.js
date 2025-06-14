// Inicializa o mapa em Vila Velha ES
const map = L.map('map').setView([-20.3297, -40.2925], 13);


// Adiciona o tile layer (mapa base)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Adiciona controle de pesquisa por local no mapa
L.Control.geocoder({
  defaultMarkGeocode: true,
  placeholder: 'Buscar localização...',
  geocoder: L.Control.Geocoder.nominatim()
}).addTo(map);

document.getElementById('bt-tipo3').addEventListener('click', function() {
window.location.href = 'principal.html'; })

const locaisPreexistentes = [
  {
    lat: -20.3290,
    lng: -40.2920,
    tipo: 'Vidro',
    volume: '10 kg',
    data: '2025-06-15',
    anexo: 'foto1.jpg'
  },
  {
    lat: -20.3310,
    lng: -40.2750,
    tipo: 'Plastico',
    volume: '8 kg',
    data: '2025-06-18',
    anexo: 'foto2.jpg'
  },
  {
    lat: -20.270,
    lng: -40.2900,
    tipo: 'Papelão',
    volume: '70 kg',
    data: '2025-06-20',
    anexo: 'foto3.jpg'
  },
  {
    lat: -20.300,
    lng: -40.2940,
    tipo: 'Metal',
    volume: '45 kg',
    data: '2025-06-22',
    anexo: 'foto4.jpg'
  },
  {
    lat: -20.3250,
    lng: -40.2850,
    tipo: 'Orgânico',
    volume: '20 kg',
    data: '2025-06-25',
    anexo: 'foto5.jpg'
  },
  {
    lat: -20.3150,
    lng: -40.2950,
    tipo: 'Eletrônico',
    volume: '5 kg',
    data: '2025-06-27',
    anexo: 'foto6.jpg'
  },
  {
    lat: -20.3400,
    lng: -40.3000,
    tipo: 'Bateria',
    volume: '2 kg',
    data: '2025-06-28',
    anexo: 'foto7.jpg'
  },
  {
    lat: -20.3500,
    lng: -40.3200,
    tipo: 'Plástico',
    volume: '15 kg',
    data: '2025-06-29',
    anexo: 'foto8.jpg'
  },
  {
    lat: -20.3350,
    lng: -40.2890,
    tipo: 'Vidro',
    volume: '12 kg',
    data: '2025-07-01',
    anexo: 'foto9.jpg'
  },
  {
    lat: -20.3100,
    lng: -40.2900,
    tipo: 'Metal',
    volume: '30 kg',
    data: '2025-07-03',
    anexo: 'foto10.jpg'
  },
  {
    lat: -20.3280,
    lng: -40.2980,
    tipo: 'Papelão',
    volume: '25 kg',
    data: '2025-07-05',
    anexo: 'foto11.jpg'
  }
];

locaisPreexistentes.forEach(local => {
  const marcador = L.marker([local.lat, local.lng]).addTo(map);
  marcador.bindPopup(
    `<strong>Tipo:</strong> ${local.tipo}<br>
     <strong>Volume:</strong> ${local.volume}<br>
     <strong>Data:</strong> ${local.data}<br>
     <strong>Anexo:</strong> ${local.anexo}<br><br>
     `
  );
});
