const cars = [
    {
        name: "Ferrari SF90 Spider",
        img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800",
        desc: "Ferrari-ს პირველი ჰიბრიდული როდსტერი.",
        specs: { "წელი": "2024", "სიმძლავრე": "1000 hp", "0-100": "2.5 წ", "ფასი": "$570,000" }
    },
    {
        name: "Porsche 911 GT3 RS",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        desc: "აეროდინამიკის შედევრი ტრეკისთვის.",
        specs: { "წელი": "2023", "სიმძლავრე": "518 hp", "0-100": "3.2 წ", "ფასი": "$223,800" }
    },
    {
        name: "Lamborghini Revuelto",
        img: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800",
        desc: "V12 ძრავისა და ელექტრო სიმძლავრის კომბინაცია.",
        specs: { "წელი": "2024", "სიმძლავრე": "1001 hp", "0-100": "2.5 წ", "ფასი": "$600,000" }
    },
    {
        name: "Bugatti Chiron SS",
        img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
        desc: "მსოფლიოში ერთ-ერთი ყველაზე სწრაფი ჰიპერკარი.",
        specs: { "წელი": "2022", "სიმძლავრე": "1600 hp", "0-100": "2.4 წ", "ფასი": "$3,800,000" }
    },
    {
        name: "Mercedes-AMG ONE",
        img: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=800",
        desc: "Formula 1-ის ტექნოლოგია საგზაო ავტომობილში.",
        specs: { "წელი": "2023", "სიმძლავრე": "1063 hp", "0-100": "2.9 წ", "ფასი": "$2,700,000" }
    }
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('carModal');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const closeBtn = document.querySelector('.close');

// გალერეის შევსება
cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
        <img src="${car.img}">
        <div class="car-info">
            <h3>${car.name}</h3>
            <p>დააჭირე მონაცემებისთვის</p>
        </div>
    `;

    card.onclick = () => {
        modalTitle.innerText = car.name;
        
        // მონაცემების სიის შექმნა
        let specsHtml = `<p style="margin-bottom:15px;">${car.desc}</p><div style="text-align:left; border-top:1px solid #333; padding-top:10px;">`;
        for (let key in car.specs) {
            specsHtml += `<div style="margin: 8px 0; display:flex; justify-content:space-between;">
                <span style="color: #d4af37;">${key}:</span> 
                <span>${car.specs[key]}</span>
            </div>`;
        }
        specsHtml += `</div>`;
        
        modalDesc.innerHTML = specsHtml;
        modal.style.display = "block";
    };

    gallery.appendChild(card);
});

// დახურვის ლოგიკა
closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };
