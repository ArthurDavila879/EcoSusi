// Inicializa o mapa em Vila Velha ES
const map = L.map('map').setView([-20.3297, -40.2925], 13);


// Adiciona o tile layer (mapa base)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

let modoMarcacaoAtivo = false;
let marcadorTemp = null;


function ativarMarcacao() {
  modoMarcacaoAtivo = true;
  alert('Clique no mapa para marcar o ponto.');
}

map.on('click', function (e) {
  if (!modoMarcacaoAtivo) return;

  const { lat, lng } = e.latlng;


  marcadorTemp = L.marker([lat, lng]).addTo(map);

  document.getElementById('formulario').classList.remove('oculto');
});


const form = document.getElementById('form-marcacao');
form.onsubmit = function (event) {
  event.preventDefault();

  if (!marcadorTemp) return;

  const tipo = form.tipo.value;
  const volume = form.volume.value;
  const data = form.data.value;
  const anexo = form.anexo.files[0]?.name || 'Nenhum';

   marcadorTemp.bindPopup(
    `<strong>Tipo:</strong> ${tipo}<br>
     <strong>Volume:</strong> ${volume}<br>
     <strong>Data:</strong> ${data}<br>
     <strong>Anexo:</strong> ${anexo}<br><br>
     <button class="btn-remover">Excluir</button>`
  );
  

  // Evento de clique no botão "Excluir"
  marcadorTemp.on('popupopen', () => {
    const btn = document.querySelector('.btn-remover');
    if (btn) {
      btn.onclick = () => {
        map.removeLayer(marcadorTemp);
        marcadorTemp = null;
      };
    }
  });

  form.reset();
  document.getElementById('formulario').classList.add('oculto');
  modoMarcacaoAtivo = false;

// Botão cancelar marcação
const btnCancelar = document.getElementById('btn-cancelar');
btnCancelar.addEventListener('click', () => {
  if (marcadorTemp) {
    map.removeLayer(marcadorTemp);
    marcadorTemp = null;
  }
  form.reset();
  document.getElementById('formulario').classList.add('oculto');
  modoMarcacaoAtivo = false;
});

// Adiciona controle de pesquisa por local no mapa
L.Control.geocoder({
  defaultMarkGeocode: true,
  placeholder: 'Buscar localização...',
  geocoder: L.Control.Geocoder.nominatim()
}).addTo(map);}

function voltarprincipal() {
  window.location.href = 'principal.html';
}


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
  }
];

locaisPreexistentes.forEach(local => {
  const marcador = L.marker([local.lat, local.lng]).addTo(map);
  marcador.bindPopup(
    `<strong>Tipo:</strong> ${local.tipo}<br>
     <strong>Volume:</strong> ${local.volume}<br>
     <strong>Data:</strong> ${local.data}<br>
     <strong>Anexo:</strong> ${local.anexo}<br><br>
     <button class="btn-remover">Excluir</button>`
  );
  marcador.on('popupopen', () => {
    const btn = document.querySelector('.btn-remover');
    if (btn) {
      btn.onclick = () => {
        map.removeLayer(marcador);
      };
    }
  });
});
