// Banco de dados com 40 imóveis (10 por categoria)
const properties = {
  apartamentos: [
    {
      id: 1,
      title: "Residencial Monaco - Apt 302",
      price: 850000,
      type: "venda",
      category: "apartamentos",
      neighborhood: "Centro",
      details: {
        area: "85m² (72m² útil)",
        bedrooms: 2,
        suites: 1,
        bathrooms: 2,
        garage: 1,
        floor: "3º andar",
        buildingAge: "5 anos"
      },
      highlights: ["Varanda gourmet", "Piscina", "Academia", "Portaria 24h"],
      description: "Apartamento premium no coração da cidade, com acabamentos de alto padrão e vista desimpedida.",
      images: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6",
        "https://images.unsplash.com/photo-1600566752225-220f5a5d40c8"
      ]
    },
    // Adicione mais 9 apartamentos...
  ],
  casas: [
    {
      id: 11,
      title: "Casa Residencial Jardins",
      price: 1200000,
      type: "venda",
      category: "casas",
      neighborhood: "Jardim Europa",
      details: {
        area: "320m² (280m² útil)",
        bedrooms: 4,
        suites: 2,
        bathrooms: 3,
        garage: 3,
        landArea: "600m²",
        buildingAge: "2 anos"
      },
      highlights: ["Piscina", "Churrasqueira", "Jardim", "Área gourmet"],
      description: "Casa moderna com arquitetura contemporânea e ampla área de lazer, perfeita para famílias.",
      images: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6",
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d"
      ]
    },
    // Adicione mais 9 casas...
  ],
  comerciais: [
    {
      id: 21,
      title: "Sala Comercial Centro",
      price: 1500000,
      type: "venda",
      category: "comerciais",
      neighborhood: "Centro",
      details: {
        area: "120m²",
        bathrooms: 2,
        parking: 2,
        floor: "8º andar",
        buildingClass: "A"
      },
      highlights: ["Ar condicionado", "Elevadores", "Segurança 24h", "Hall de entrada"],
      description: "Sala comercial em edifício corporativo, com excelente localização e infraestrutura completa.",
      images: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2",
        "https://images.unsplash.com/photo-1556740738-b6a63e27c4df",
        "https://images.unsplash.com/photo-1527192491265-7e15c55b1ed2"
      ]
    },
    // Adicione mais 9 comerciais...
  ],
  terrenos: [
    {
      id: 31,
      title: "Terreno Residencial Gleba",
      price: 350000,
      type: "venda",
      category: "terrenos",
      neighborhood: "Gleba Palhano",
      details: {
        area: "450m²",
        frontage: "15m",
        depth: "30m",
        zoning: "Residencial"
      },
      highlights: ["Plano", "Infraestrutura completa", "Localização privilegiada"],
      description: "Terreno em condomínio fechado, pronto para construção, com topografia regular e fácil acesso.",
      images: [
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
        "https://images.unsplash.com/photo-1600585152220-90363fe7e115",
        "https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6"
      ]
    }
    // Adicione mais 9 terrenos...
  ]
};

// Função para formatar preço
function formatPrice(price, type) {
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price);
  return type === 'aluguel' ? `${formatted}/mês` : formatted;
}

// Função para criar cards de imóveis
function createPropertyCard(property) {
  return `
    <div class="property-card bg-white rounded-lg shadow-md overflow-hidden">
      <a href="property.html?id=${property.id}">
        <div class="relative">
          <img src="${property.images[0]}" alt="${property.title}" class="w-full h-48 object-cover">
          <span class="absolute top-2 left-2 bg-${property.type === 'venda' ? 'primary' : 'green'}-600 text-white text-xs font-bold px-2 py-1 rounded">
            ${property.type === 'venda' ? 'VENDA' : 'ALUGUEL'}
          </span>
        </div>
        <div class="p-4">
          <h3 class="font-bold text-lg mb-1 truncate">${property.title}</h3>
          <p class="text-primary font-bold text-xl mb-2">${formatPrice(property.price, property.type)}</p>
          <div class="flex items-center text-gray-600 text-sm mb-2">
            <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            ${property.neighborhood}
          </div>
          <div class="flex flex-wrap gap-1 mt-3">
            <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">${property.details.area}</span>
            <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">${property.details.bedrooms || '-'} dorm</span>
            <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">${property.details.bathrooms || '-'} banh</span>
            <span class="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded">${property.details.garage || '-'} vaga</span>
          </div>
        </div>
      </a>
    </div>
  `;
}

// Carrega imóveis na página inicial
document.addEventListener('DOMContentLoaded', () => {
  // Destaques (8 imóveis)
  const featuredContainer = document.getElementById('featured-properties');
  if (featuredContainer) {
    const featured = [
      ...properties.apartamentos.slice(0, 2),
      ...properties.casas.slice(0, 2),
      ...properties.comerciais.slice(0, 2),
      ...properties.terrenos.slice(0, 2)
    ];
    featuredContainer.innerHTML = featured.map(createPropertyCard).join('');
  }

  // Novos anúncios (8 imóveis diferentes)
  const newContainer = document.getElementById('new-properties');
  if (newContainer) {
    const newProperties = [
      ...properties.apartamentos.slice(2, 4),
      ...properties.casas.slice(2, 4),
      ...properties.comerciais.slice(2, 4),
      ...properties.terrenos.slice(2, 4)
    ];
    newContainer.innerHTML = newProperties.map(createPropertyCard).join('');
  }

  // Configura o formulário de busca
  const searchForm = document.getElementById('search-form');
  if (searchForm) {
    searchForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(this);
      const params = new URLSearchParams();
      
      if (formData.get('type')) params.append('type', formData.get('type'));
      if (formData.get('category')) params.append('category', formData.get('category'));
      if (formData.get('neighborhood')) params.append('neighborhood', formData.get('neighborhood'));
      
      window.location.href = `listing.html?${params.toString()}`;
    });
  }
});
