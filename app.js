// Initialize landing page
document.addEventListener('DOMContentLoaded', function() {
    const startShoppingBtn = document.getElementById('startShoppingBtn');
    const heroSearchBtn = document.getElementById('heroSearchBtn');
    
    if (startShoppingBtn) {
        startShoppingBtn.addEventListener('click', function() {
            showMarketplace();
            window.scrollTo(0, 0);
        });
    }
    
    if (heroSearchBtn) {
        heroSearchBtn.addEventListener('click', function() {
            showMarketplace();
            window.scrollTo(0, 0);
        });
    }
    
    // Add event listener for hero search input
    const heroSearchInput = document.getElementById('heroSearchInput');
    if (heroSearchInput) {
        heroSearchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                showMarketplace();
                window.scrollTo(0, 0);
            }
        });
    }
});

// Toggle between landing page and marketplace
function showMarketplace() {
    document.getElementById('landingPage').style.display = 'none';
    document.getElementById('marketplacePage').style.display = 'block';
    renderListings();
}

function showLanding() {
    document.getElementById('landingPage').style.display = 'flex';
    document.getElementById('marketplacePage').style.display = 'none';
}

// Sample car data
const sampleCars = [
    {
        id: 1,
        make: 'Toyota',
        model: 'Camry XLE',
        year: 2012,
        price: 8500,
        mileage: 235000,
        condition: 'good',
        description: '- Transmission Replaced (3 Month warranty)\n- Transmission Fluid Flush\n- Synthetic Oil Change\n- Cabin Filter Change\n- Professionally Detailed @khansdetail\n- VIN available on request',
        location: '1 Park Ave, Lyndhurst, NJ 07071',
        seller: 'Rían',
        phone: '(555) 123-4567',
        postedDate: new Date(),
        images: [
            'images/camry-1.jpg',
            'images/camry-2.jpg',
            'images/camry-3.jpg',
            'images/camry-4.jpg',
            'images/camry-5.jpg',
            'images/camry-6.jpg',
            'images/camry-7.jpg'
        ],
        sold: false
    },
    {
        id: 2,
        make: 'Nissan',
        model: 'Maxima SE',
        year: 2001,
        price: 6500,
        mileage: 139000,
        condition: 'good',
        description: '- New Oil Change & Filter\n- New Car Play and Android Auto Navigation System\n- New Reverse Camera\n- Professionally Detailed @khansdetail\n- All Maintenance up-to-date\n- VIN available on request',
        location: '1 Park Ave, Lyndhurst, NJ 07071',
        seller: 'Rían',
        phone: '(555) 123-4567',
        postedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        images: [
            'images/nissan-1.jpg',
            'images/nissan-2.jpg',
            'images/nissan-3.jpg',
            'images/nissan-4.jpg',
            'images/nissan-5.jpg',
            'images/nissan-6.jpg',
            'images/nissan-7.jpg'
        ],
        sold: false
    },
    {
        id: 3,
        make: 'Toyota',
        model: 'Camry LE',
        year: 2005,
        price: 6800,
        mileage: 150000,
        condition: 'fair',
        description: '- Rear taillight complete assembly\n- Front wheel bearing\n- Two new inner tire rods\n- VIN available on request',
        location: '1 Park Ave, Lyndhurst, NJ 07071',
        seller: 'Rían',
        phone: '(555) 123-4567',
        postedDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
        images: [
            'images/camry2-1.jpg',
            'images/camry2-2.jpg',
            'images/camry2-3.jpg',
            'images/camry2-4.jpg',
            'images/camry2-5.jpg',
            'images/camry2-6.jpg'
        ],
        sold: false
    },
    {
        id: 4,
        make: 'BMW',
        model: '530xi',
        year: 2006,
        price: 12500,
        mileage: 109000,
        condition: 'good',
        description: '- New brake pads all around\n- New valve cover gaskets\n- Tune up\n- Blacked out BMW emblems\n- Oil change plus new oil filter\n- Led emblems logo\n- New Hood shocks\n- New Cabin air filter\n- Price is negotiable. Send me an offer.',
        location: '1 Park Ave, Lyndhurst, NJ 07071',
        seller: 'Rían',
        phone: '(555) 123-4567',
        postedDate: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
        images: [
            'images/bmw-1.jpg',
            'images/bmw-2.jpg',
            'images/bmw-3.jpg',
            'images/bmw-4.jpg',
            'images/bmw-5.jpg'
        ],
        sold: true
    },
    {
        id: 5,
        make: 'Honda',
        model: 'Accord Coupe',
        year: 2012,
        price: 9500,
        mileage: 137000,
        condition: 'good',
        description: '- Wireless Car Apple play\n- Reverse Camera\n- Nothing wrong with selling as is!',
        location: '1 Park Ave, Lyndhurst, NJ 07071',
        seller: 'Rían',
        phone: '(555) 123-4567',
        postedDate: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000),
        images: [
            'images/honda-1.jpg',
            'images/honda-2.jpg',
            'images/honda-3.jpg',
            'images/honda-4.jpg',
            'images/honda-5.jpg'
        ],
        sold: true
    },
    {
        id: 6,
        make: 'Mazda',
        model: 'Mazda6 i Sport',
        year: 2009,
        price: 8200,
        mileage: 155000,
        condition: 'good',
        description: '- New Battery\n- New Oil Change\n- New Oil Filter\n- Coolant Flush\n- Power Steering Flush\n- Professionally Detailed @khansdetail\n- New Car Play & Android Auto Navigation\n- New Reverse Camera\n- All Maintenance Up To Date',
        location: '1 Park Ave, Lyndhurst, NJ 07071',
        seller: 'Rían',
        phone: '(555) 123-4567',
        postedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        images: [
            'images/mazda-1.jpg',
            'images/mazda-2.jpg',
            'images/mazda-3.jpg',
            'images/mazda-4.jpg',
            'images/mazda-5.jpg'
        ],
        sold: true
    },
    {
        id: 7,
        make: 'Honda',
        model: 'Civic EX',
        year: 2003,
        price: 5900,
        mileage: 138000,
        condition: 'good',
        description: '- New wireless Car play and android auto\n- New Air Filter\n- New Cabin Filter\n- New Alternator\n- New AC Compressor\n- New three belts\n- New engine oil\n- New engine filter\n- New transmission Fluid\n- New Rear Brake Shoes\n- New rear drum brake\n- New wheel cylinder rear\n- New Windshield\n- Professionally detailed by @khansdetail',
        location: '1 Park Ave, Lyndhurst, NJ 07071',
        seller: 'Rían',
        phone: '(555) 123-4567',
        postedDate: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        images: [
            'images/civic-1.jpg',
            'images/civic-2.jpg',
            'images/civic-3.jpg',
            'images/civic-4.jpg',
            'images/civic-5.jpg'
        ],
        sold: true
    },
    {
        id: 8,
        make: 'Honda',
        model: 'CR-V EX Sport',
        year: 2015,
        price: 16500,
        mileage: 112000,
        condition: 'good',
        description: '- All maintenance done from Honda\n- Upgraded entertainment system\n- Bluetooth aux\n- Reverse camera\n- Right turn signal side mirror camera\n- Car does not need anything at all\n- Selling as is - Ready to go\n- Professionally cleaned inside and out',
        location: '1 Park Ave, Lyndhurst, NJ 07071',
        seller: 'Rían',
        phone: '(555) 123-4567',
        postedDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        images: [
            'images/crv-1.jpg',
            'images/crv-2.jpg',
            'images/crv-3.jpg',
            'images/crv-4.jpg',
            'images/crv-5.jpg'
        ],
        sold: true
    }
];

// Initialize the app
let allCars = [...sampleCars];
let filteredCars = [...sampleCars];
let currentSection = 'for-sale'; // Track which section is active

document.addEventListener('DOMContentLoaded', function() {
    renderListings();
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Section tabs
    document.getElementById('forSaleTab').addEventListener('click', function() {
        currentSection = 'for-sale';
        document.querySelectorAll('.section-tab').forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');
        applyFilters();
    });

    document.getElementById('soldTab').addEventListener('click', function() {
        currentSection = 'sold';
        document.querySelectorAll('.section-tab').forEach(tab => tab.classList.remove('active'));
        this.classList.add('active');
        applyFilters();
    });

    // Search - trigger on input for real-time results
    document.getElementById('searchInput').addEventListener('input', performSearch);

    // Filters
    document.getElementById('applyFilters').addEventListener('click', applyFilters);
    document.getElementById('clearFilters').addEventListener('click', clearFilters);

    // Price range
    document.getElementById('priceMin').addEventListener('input', function() {
        updatePriceDisplay();
        applyFilters();
    });
    document.getElementById('priceMax').addEventListener('input', function() {
        updatePriceDisplay();
        applyFilters();
    });

    // Sort
    document.getElementById('sortBy').addEventListener('change', function() {
        sortListings(this.value);
        renderListings();
    });

    // Modals

    // Modal closes
    document.querySelectorAll('.close').forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').classList.add('hidden');
        });
    });

    // Click outside modal to close
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.classList.add('hidden');
            }
        });
    });

    // Form submissions
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('sellForm').addEventListener('submit', handleSellCar);
}

// Render listings
function renderListings() {
    const grid = document.getElementById('listingsGrid');
    grid.innerHTML = '';

    // Filter by section (sold vs for-sale)
    let sectionCars = filteredCars.filter(car => {
        if (currentSection === 'for-sale') {
            return !car.sold;
        } else {
            return car.sold;
        }
    });

    if (sectionCars.length === 0) {
        const message = currentSection === 'for-sale' 
            ? 'No cars for sale. Try adjusting your filters.' 
            : 'No sold cars to display.';
        grid.innerHTML = `<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #65676b;">${message}</div>`;
        document.getElementById('resultsCount').textContent = currentSection === 'for-sale' 
            ? 'No results' 
            : 'No sold cars';
        return;
    }

    sectionCars.forEach(car => {
        const listing = createCarListing(car);
        grid.appendChild(listing);
    });

    const sectionLabel = currentSection === 'for-sale' ? 'Cars For Sale' : 'Sold Cars';
    document.getElementById('resultsCount').textContent = `Showing ${sectionCars.length} ${sectionLabel}`;
}

// Create car listing element
function createCarListing(car) {
    const div = document.createElement('div');
    div.className = 'car-listing';
    
    // Initialize image carousel
    const images = car.images || [];
    const currentImageIndex = 0;
    
    // Create image element or placeholder
    const imageHTML = images.length > 0 
        ? `<img src="${images[0]}" alt="Car image" class="car-image-img" />`
        : '<div class="car-image-placeholder">No Image</div>';
    
    const soldOverlay = car.sold ? '<div class="sold-overlay"><div class="sold-badge">SOLD</div></div>' : '';
    
    div.innerHTML = `
        <div class="car-image-carousel">
            <div class="car-image-container">
                <div class="car-image" data-image-index="0">
                    ${imageHTML}
                    ${soldOverlay}
                </div>
                ${images.length > 1 ? `
                    <button class="carousel-prev" data-car-id="${car.id}">❮</button>
                    <button class="carousel-next" data-car-id="${car.id}">❯</button>
                    <div class="carousel-indicators">
                        ${images.map((_, idx) => `<div class="indicator ${idx === 0 ? 'active' : ''}" data-index="${idx}"></div>`).join('')}
                    </div>
                ` : ''}
            </div>
        </div>
        <div class="car-content">
            <div class="car-title">${car.year} ${car.make} ${car.model}</div>
            <div class="car-subtitle">${car.mileage.toLocaleString()} miles</div>
            <div class="car-price">$${car.price.toLocaleString()}</div>
            <div class="car-monthly-estimate">Est. $${calculateMonthlyPayment(car.price)}/mo</div>
            <div class="car-details">
                <span class="car-condition ${car.condition}">${capitalize(car.condition)}</span>
            </div>
            <div style="margin-bottom: var(--spacing-md); color: var(--text-light); font-size: 13px;">
                ${car.location}
            </div>
            <div class="car-footer">
                <span class="car-time">${formatDate(car.postedDate)}</span>
            </div>
        </div>
    `;
    
    // Add carousel event listeners if multiple images
    if (images.length > 1) {
        const prevBtn = div.querySelector(`.carousel-prev`);
        const nextBtn = div.querySelector(`.carousel-next`);
        const imageContainer = div.querySelector('.car-image');
        const indicators = div.querySelectorAll('.indicator');
        
        let currentIdx = 0;
        
        const updateCarousel = (idx) => {
            currentIdx = (idx + images.length) % images.length;
            imageContainer.innerHTML = `
                <img src="${images[currentIdx]}" alt="Car image" class="car-image-img" />
                ${car.sold ? '<div class="sold-overlay"><div class="sold-badge">SOLD</div></div>' : ''}
            `;
            imageContainer.setAttribute('data-image-index', currentIdx);
            indicators.forEach((ind, i) => {
                ind.classList.toggle('active', i === currentIdx);
            });
        };
        
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            updateCarousel(currentIdx - 1);
        });
        
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            updateCarousel(currentIdx + 1);
        });
        
        indicators.forEach((ind, idx) => {
            ind.addEventListener('click', (e) => {
                e.stopPropagation();
                updateCarousel(idx);
            });
        });
    }
    
    div.addEventListener('click', () => openCarDetail(car));
    return div;
}

// Open car detail modal
function openCarDetail(car) {
    const modal = document.getElementById('carModal');
    const body = document.getElementById('carModalBody');
    const images = car.images || [];

    // Create image element or placeholder
    const imageHTML = images.length > 0 
        ? `<img src="${images[0]}" alt="Car image" class="car-detail-image-img" />`
        : '<div class="car-image-placeholder">No Image</div>';

    body.innerHTML = `
        <div class="car-detail-grid">
            <div class="car-detail-carousel">
                <div class="car-detail-image-container">
                    <div class="car-detail-image" data-image-index="0">
                        ${imageHTML}
                    </div>
                    ${images.length > 1 ? `
                        <button class="carousel-prev-detail">❮</button>
                        <button class="carousel-next-detail">❯</button>
                        <div class="carousel-indicators-detail">
                            ${images.map((_, idx) => `<div class="indicator-detail ${idx === 0 ? 'active' : ''}" data-index="${idx}"></div>`).join('')}
                        </div>
                    ` : ''}
                </div>
            </div>
            
            <div class="car-detail-info">
                <div class="car-detail-title">${car.year} ${car.make} ${car.model}</div>
                <div class="car-detail-price">$${car.price.toLocaleString()}</div>
                
                <div class="car-detail-specs">
                    <div class="spec-item">
                        <div class="spec-label">Mileage</div>
                        <div class="spec-value">${car.mileage.toLocaleString()} mi</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Year</div>
                        <div class="spec-value">${car.year}</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Condition</div>
                        <div class="spec-value">${capitalize(car.condition)}</div>
                    </div>
                    <div class="spec-item">
                        <div class="spec-label">Location</div>
                        <div class="spec-value">${car.location}</div>
                    </div>
                </div>

                <div class="car-detail-description">
                    <h3>Description</h3>
                    <p>${car.description.replace(/\n/g, '<br>')}</p>
                </div>

                <div class="car-detail-contact">
                    <h3>Seller Information</h3>
                    <div class="contact-item">
                        <span class="contact-icon">👤</span>
                        <span class="contact-info">${car.seller}</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📞</span>
                        <span class="contact-info">${car.phone}</span>
                    </div>
                    <div class="contact-item">
                        <span class="contact-icon">📍</span>
                        <span class="contact-info">${car.location}</span>
                    </div>
                </div>

                <div class="car-detail-actions">
                    <button class="btn-primary" onclick="alert('Contact feature coming soon!')">Contact Seller</button>
                    <button class="btn-secondary" id="shareBtn">Share</button>
                </div>
            </div>
        </div>
    `;

    // Setup carousel for detail view
    if (images.length > 1) {
        const prevBtn = body.querySelector('.carousel-prev-detail');
        const nextBtn = body.querySelector('.carousel-next-detail');
        const imageElement = body.querySelector('.car-detail-image');
        const indicators = body.querySelectorAll('.indicator-detail');
        
        let currentIdx = 0;
        
        const updateDetailCarousel = (idx) => {
            currentIdx = (idx + images.length) % images.length;
            imageElement.innerHTML = `<img src="${images[currentIdx]}" alt="Car image" class="car-detail-image-img" />`;
            imageElement.setAttribute('data-image-index', currentIdx);
            indicators.forEach((ind, i) => {
                ind.classList.toggle('active', i === currentIdx);
            });
        };
        
        prevBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            updateDetailCarousel(currentIdx - 1);
        });
        
        nextBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            updateDetailCarousel(currentIdx + 1);
        });
        
        indicators.forEach((ind, idx) => {
            ind.addEventListener('click', (e) => {
                e.stopPropagation();
                updateDetailCarousel(idx);
            });
        });
    }

    // Share button
    const shareBtn = body.querySelector('#shareBtn');
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            const shareLink = `${window.location.origin}${window.location.pathname}?car=${car.id}`;
            navigator.clipboard.writeText(shareLink).then(() => {
                showShareNotification(`${car.year} ${car.make} ${car.model}`);
            }).catch(() => {
                // Fallback if clipboard API fails
                const textArea = document.createElement('textarea');
                textArea.value = shareLink;
                document.body.appendChild(textArea);
                textArea.select();
                document.execCommand('copy');
                document.body.removeChild(textArea);
                showShareNotification(`${car.year} ${car.make} ${car.model}`);
            });
        });
    }

    modal.classList.remove('hidden');
}

// Search functionality
function performSearch() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    
    filteredCars = allCars.filter(car => {
        return car.make.toLowerCase().includes(searchTerm) ||
               car.model.toLowerCase().includes(searchTerm) ||
               car.location.toLowerCase().includes(searchTerm);
    });

    renderListings();
}

// Apply filters
function applyFilters() {
    const priceMin = parseInt(document.getElementById('priceMin').value);
    const priceMax = parseInt(document.getElementById('priceMax').value);
    const make = document.getElementById('makeFilter').value.toLowerCase();
    const yearMin = parseInt(document.getElementById('yearMin').value);
    const yearMax = parseInt(document.getElementById('yearMax').value);

    filteredCars = allCars.filter(car => {
        let match = true;

        // Price filter - EXACT price range
        if (car.price < priceMin || car.price > priceMax) match = false;

        // Make filter
        if (make && !car.make.toLowerCase().includes(make)) match = false;

        // Year filter
        if (car.year < yearMin || car.year > yearMax) match = false;

        return match;
    });

    renderListings();
}

// Clear filters
function clearFilters() {
    document.getElementById('searchInput').value = '';
    document.getElementById('priceMin').value = 0;
    document.getElementById('priceMax').value = 20000;
    document.getElementById('makeFilter').value = '';
    document.getElementById('yearMin').value = 1990;
    document.getElementById('yearMax').value = 2025;
    document.getElementById('sortBy').value = 'newest';

    updatePriceDisplay();

    filteredCars = [...allCars];
    renderListings();
}

// Update price display
function updatePriceDisplay() {
    const min = document.getElementById('priceMin').value;
    const max = document.getElementById('priceMax').value;
    document.getElementById('minPrice').textContent = parseInt(min).toLocaleString();
    document.getElementById('maxPrice').textContent = parseInt(max).toLocaleString();
}

// Sort listings
function sortListings(sortBy) {
    switch(sortBy) {
        case 'price-low':
            filteredCars.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            filteredCars.sort((a, b) => b.price - a.price);
            break;
        case 'mileage':
            filteredCars.sort((a, b) => a.mileage - b.mileage);
            break;
        case 'newest':
        default:
            filteredCars.sort((a, b) => b.postedDate - a.postedDate);
            break;
    }
}

// Open modals
function openLoginModal() {
    document.getElementById('loginModal').classList.remove('hidden');
}

function openSellModal() {
    document.getElementById('sellModal').classList.remove('hidden');
}

// Form handlers
function handleLogin(e) {
    e.preventDefault();
    alert('Login feature coming soon! For now, browse and contact sellers directly.');
    document.getElementById('loginModal').classList.add('hidden');
    document.getElementById('loginForm').reset();
}

function handleSellCar(e) {
    e.preventDefault();
    
    const newCar = {
        id: allCars.length + 1,
        make: document.getElementById('sellMake').value,
        model: document.getElementById('sellModel').value,
        year: parseInt(document.getElementById('sellYear').value),
        price: parseInt(document.getElementById('sellPrice').value),
        mileage: parseInt(document.getElementById('sellMileage').value),
        condition: document.getElementById('sellCondition').value,
        description: document.getElementById('sellDescription').value,
        location: 'Your City',
        seller: 'You',
        phone: document.getElementById('sellPhone').value,
        postedDate: new Date(),
        image: '🚗'
    };

    allCars.unshift(newCar);
    filteredCars = [...allCars];

    alert('Car listed successfully! It now appears in the marketplace.');
    document.getElementById('sellModal').classList.add('hidden');
    document.getElementById('sellForm').reset();
    
    renderListings();
}

// Calculate monthly payment estimate
function calculateMonthlyPayment(price, downPayment = 0, apr = 6.5, loanTerm = 60) {
    const principal = price - downPayment;
    const monthlyRate = apr / 100 / 12;
    
    if (monthlyRate === 0) {
        return Math.round(principal / loanTerm);
    }
    
    const monthlyPayment = principal * 
        (monthlyRate * Math.pow(1 + monthlyRate, loanTerm)) / 
        (Math.pow(1 + monthlyRate, loanTerm) - 1);
    
    return Math.round(monthlyPayment);
}

// Share notification function
function showShareNotification(carName) {
    const notification = document.createElement('div');
    notification.className = 'share-notification';
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">✓</div>
            <div class="notification-text">
                <div class="notification-title">Link Copied!</div>
                <div class="notification-message">The link for this ${carName} has been saved and is ready to share.</div>
            </div>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">×</button>
        </div>
    `;
    document.body.appendChild(notification);
    
    // Auto-remove after 4 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 4000);
}

// Utility functions
function capitalize(str) {
    return str.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

function formatDate(date) {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return date.toLocaleDateString();
}
