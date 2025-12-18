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
        description: '- Transmission Replaced (3 Month warranty)\n- Transmission Fluid Flush\n- Synthetic Oil Change\n- Cabin Filter Change\n- Professionally Detailed <a href="https://www.instagram.com/khansdetail/?hl=en" target="_blank">@khansdetail</a>\n- VIN available on request',
        location: '1 Park Ave, Lyndhurst, NJ 07071',
        seller: 'Rían',
        phone: '(555) 123-4567',
        postedDate: new Date(),
        images: [
            'images/Cars/New cam/IMG_20251217_001910 (5).png',
            'images/Cars/New cam/IMG_20251217_001909 (15).png',
            'images/Cars/New cam/IMG_20251217_001909 (16).png',
            'images/Cars/New cam/IMG_20251217_001909 (17).png',
            'images/Cars/New cam/IMG_20251217_001909 (18).png',
            'images/Cars/New cam/IMG_20251217_001909 (19).png',
            'images/Cars/New cam/IMG_20251217_001909 (20).png',
            'images/Cars/New cam/IMG_20251217_001909 (21).png',
            'images/Cars/New cam/IMG_20251217_001910 (1).png',
            'images/Cars/New cam/IMG_20251217_001910 (2).png',
            'images/Cars/New cam/IMG_20251217_001910 (3).png',
            'images/Cars/New cam/IMG_20251217_001910 (4).png',
            'images/Cars/New cam/IMG_20251217_001909 (14).png',
            'images/Cars/New cam/IMG_20251217_001910.png'
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
        description: '- New Oil Change & Filter\n- New Car Play and Android Auto Navigation System\n- New Reverse Camera\n- Professionally Detailed <a href="https://www.instagram.com/khansdetail/?hl=en" target="_blank">@khansdetail</a>\n- All Maintenance up-to-date\n- VIN available on request',
        location: '1 Park Ave, Lyndhurst, NJ 07071',
        seller: 'Rían',
        phone: '(555) 123-4567',
        postedDate: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
        images: [
            'images/Cars/Nissan/IMG_20251217_001909.png',
            'images/Cars/Nissan/IMG_20251217_001908.png',
            'images/Cars/Nissan/IMG_20251217_002515.jpg',
            'images/Cars/Nissan/IMG_20251217_002529.png',
            'images/Cars/Nissan/IMG_20251217_002532.png',
            'images/Cars/Nissan/IMG_20251217_002533.png',
            'images/Cars/Nissan/IMG_20251217_002535.png',
            'images/Cars/Nissan/IMG_20251217_002536.png',
            'images/Cars/Nissan/IMG_20251217_002538.png',
            'images/Cars/Nissan/IMG_20251217_002539.png',
            'images/Cars/Nissan/IMG_20251217_002541.png',
            'images/Cars/Nissan/IMG_20251217_002542.png',
            'images/Cars/Nissan/IMG_20251217_002546.png'
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
            'images/Cars/Old Cam/IMG_20251217_001909 (13).png',
            'images/Cars/Old Cam/IMG_20251217_001909 (4).png',
            'images/Cars/Old Cam/IMG_20251217_001909 (5).png',
            'images/Cars/Old Cam/IMG_20251217_001909 (6).png',
            'images/Cars/Old Cam/IMG_20251217_001909 (7).png',
            'images/Cars/Old Cam/IMG_20251217_001909 (8).png',
            'images/Cars/Old Cam/IMG_20251217_001909 (9).png',
            'images/Cars/Old Cam/IMG_20251217_001909 (10).png',
            'images/Cars/Old Cam/IMG_20251217_001909 (11).png',
            'images/Cars/Old Cam/IMG_20251217_001909 (12).png',
            'images/Cars/Old Cam/IMG_20251217_001909 (3).png'
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
            'images/Cars/BMW/IMG_20251216_223407.png',
            'images/Cars/BMW/IMG_20251216_223407 (2).png',
            'images/Cars/BMW/IMG_20251216_223407 (3).png',
            'images/Cars/BMW/IMG_20251216_223407 (4).png',
            'images/Cars/BMW/IMG_20251216_223407 (5).png',
            'images/Cars/BMW/IMG_20251216_223407 (6).png',
            'images/Cars/BMW/IMG_20251216_223407 (1).png',
            'images/Cars/BMW/IMG_20251216_223408 (1).png',
            'images/Cars/BMW/IMG_20251216_223407 (7).png',
            'images/Cars/BMW/IMG_20251216_223408.png'
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
            'images/Cars/Accord/IMG_20251216_223018 (1).png',
            'images/Cars/Accord/IMG_20251216_223017 (2).png',
            'images/Cars/Accord/IMG_20251216_223017 (3).png',
            'images/Cars/Accord/IMG_20251216_223017 (4).png',
            'images/Cars/Accord/IMG_20251216_223017 (5).png',
            'images/Cars/Accord/IMG_20251216_223017.png',
            'images/Cars/Accord/IMG_20251216_223017 (1).png',
            'images/Cars/Accord/IMG_20251216_223018.png'
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
        description: '- New Battery\n- New Oil Change\n- New Oil Filter\n- Coolant Flush\n- Power Steering Flush\n- Professionally Detailed <a href="https://www.instagram.com/khansdetail/?hl=en" target="_blank">@khansdetail</a>\n- New Car Play & Android Auto Navigation\n- New Reverse Camera\n- All Maintenance Up To Date',
        location: '1 Park Ave, Lyndhurst, NJ 07071',
        seller: 'Rían',
        phone: '(555) 123-4567',
        postedDate: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
        images: [
            'images/Cars/Mazda/IMG_20251216_223105 (1).png',
            'images/Cars/Mazda/IMG_20251216_223105.png',
            'images/Cars/Mazda/IMG_20251216_223107 (1).png',
            'images/Cars/Mazda/IMG_20251216_223107.png',
            'images/Cars/Mazda/IMG_20251216_223223 (1).png',
            'images/Cars/Mazda/IMG_20251216_223223 (2).png',
            'images/Cars/Mazda/IMG_20251216_223223 (3).png',
            'images/Cars/Mazda/IMG_20251216_223223.png',
            'images/Cars/Mazda/IMG_20251216_223224 (1).png',
            'images/Cars/Mazda/IMG_20251216_223224.png',
            'images/Cars/Mazda/IMG_20251216_223320 (1).png',
            'images/Cars/Mazda/IMG_20251216_223320 (2).png',
            'images/Cars/Mazda/IMG_20251216_223320.png'
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
        description: '- New wireless Car play and android auto\n- New Air Filter\n- New Cabin Filter\n- New Alternator\n- New AC Compressor\n- New three belts\n- New engine oil\n- New engine filter\n- New transmission Fluid\n- New Rear Brake Shoes\n- New rear drum brake\n- New wheel cylinder rear\n- New Windshield\n- Professionally detailed by <a href="https://www.instagram.com/khansdetail/?hl=en" target="_blank">@khansdetail</a>',
        location: '1 Park Ave, Lyndhurst, NJ 07071',
        seller: 'Rían',
        phone: '(555) 123-4567',
        postedDate: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000),
        images: [
            'images/Cars/Civic/IMG_20251216_223106 (6).png',
            'images/Cars/Civic/IMG_20251216_223105 (3).png',
            'images/Cars/Civic/IMG_20251216_223105 (4).png',
            'images/Cars/Civic/IMG_20251216_223105 (5).png',
            'images/Cars/Civic/IMG_20251216_223105 (6).png',
            'images/Cars/Civic/IMG_20251216_223105 (7).png',
            'images/Cars/Civic/IMG_20251216_223106 (1).png',
            'images/Cars/Civic/IMG_20251216_223106 (2).png',
            'images/Cars/Civic/IMG_20251216_223106 (3).png',
            'images/Cars/Civic/IMG_20251216_223106 (4).png',
            'images/Cars/Civic/IMG_20251216_223106 (5).png',
            'images/Cars/Civic/IMG_20251216_223105 (2).png',
            'images/Cars/Civic/IMG_20251216_223106.png'
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
            'images/Cars/Crv/IMG_20251216_223622.png',
            'images/Cars/Crv/IMG_20251216_223622 (2).png',
            'images/Cars/Crv/IMG_20251216_223622 (3).png',
            'images/Cars/Crv/IMG_20251216_223622 (4).png',
            'images/Cars/Crv/IMG_20251216_223622 (5).png',
            'images/Cars/Crv/IMG_20251216_223622 (6).png',
            'images/Cars/Crv/IMG_20251216_223622 (7).png',
            'images/Cars/Crv/IMG_20251216_223622 (1).png',
            'images/Cars/Crv/IMG_20251216_223623 (1).png',
            'images/Cars/Crv/IMG_20251216_223623.png'
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

    // Setup zoom modal
    const zoomModal = document.getElementById('imageZoomModal');
    const zoomClose = document.getElementById('zoomClose');
    zoomClose.addEventListener('click', () => {
        zoomModal.classList.add('hidden');
    });
    zoomModal.addEventListener('click', (e) => {
        if (e.target === zoomModal) {
            zoomModal.classList.add('hidden');
        }
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
        ? `<img src="${images[0]}" alt="Car image" class="car-image-img zoom-image" data-full-src="${images[0]}" />`
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
            const imgSrc = images[currentIdx];
            
            // Update indicators immediately
            indicators.forEach((ind, i) => {
                ind.classList.toggle('active', i === currentIdx);
            });
            
            // Preload the image before displaying it
            const img = new Image();
            img.onload = () => {
                imageContainer.innerHTML = `
                    <img src="${imgSrc}" alt="Car image" class="car-image-img" />
                    ${car.sold ? '<div class="sold-overlay"><div class="sold-badge">SOLD</div></div>' : ''}
                `;
                imageContainer.setAttribute('data-image-index', currentIdx);
            };
            img.onerror = () => {
                // Fallback if image fails to load
                imageContainer.innerHTML = `
                    <img src="${imgSrc}" alt="Car image" class="car-image-img" />
                    ${car.sold ? '<div class="sold-overlay"><div class="sold-badge">SOLD</div></div>' : ''}
                `;
                imageContainer.setAttribute('data-image-index', currentIdx);
            };
            img.src = imgSrc;
            
            // Fallback timeout - update after 1 second even if image doesn't load
            setTimeout(() => {
                if (imageContainer.getAttribute('data-image-index') !== String(currentIdx)) {
                    imageContainer.innerHTML = `
                        <img src="${imgSrc}" alt="Car image" class="car-image-img" />
                        ${car.sold ? '<div class="sold-overlay"><div class="sold-badge">SOLD</div></div>' : ''}
                    `;
                    imageContainer.setAttribute('data-image-index', currentIdx);
                }
            }, 1000);
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
        ? `<img src=\"${images[0]}\" alt=\"Car image\" class=\"car-detail-image-img zoom-image\" data-full-src=\"${images[0]}\" />`
        : '<div class=\"car-image-placeholder\">No Image</div>';

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
                    <button class="btn-primary" onclick="window.open('https://car-question-form.zapier.app/submit-question', '_blank')">Contact Seller</button>
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
            imageElement.innerHTML = `<img src="${images[currentIdx]}" alt="Car image" class="car-detail-image-img zoom-image" data-full-src="${images[currentIdx]}" />`;
            imageElement.setAttribute('data-image-index', currentIdx);
            indicators.forEach((ind, i) => {
                ind.classList.toggle('active', i === currentIdx);
            });
        };

        // Initialize carousel with first image
        updateDetailCarousel(0);

        // Add zoom functionality to detail images
        imageElement.addEventListener('click', (e) => {
            if (e.target.classList.contains('zoom-image')) {
                const fullSrc = images[currentIdx];
                openImageZoom(fullSrc);
            }
        });

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

// Open image zoom modal
function openImageZoom(imageSrc) {
    const zoomModal = document.getElementById('imageZoomModal');
    const zoomImage = document.getElementById('zoomImage');
    zoomImage.src = imageSrc;
    zoomModal.classList.remove('hidden');
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
