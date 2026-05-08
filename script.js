const cars = [
    {
        name: "Ferrari SF90 Spider",
        img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?w=800",
        desc: "იტალიური ჰიბრიდული შედევრი.",
        specs: { "წელი": "2024", "სიმძლავრე": "1000 hp", "0-100": "2.5 წ", "ფასი": "$570,000" }
    },
    {
        name: "Porsche 911 GT3 RS",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
        desc: "საუკეთესო მართვადობის მქონე ავტომობილი.",
        specs: { "წელი": "2023", "სიმძლავრე": "518 hp", "0-100": "3.2 წ", "ფასი": "$223,800" }
    },
    {
        name: "Lamborghini Revuelto",
        img: "https://images.pistonheads.com/nimg/46995/Revuelto_1.jpg",
        desc: "V12 ძრავისა და ელექტრო სიმძლავრის კომბინაცია.",
        specs: { "წელი": "2024", "სიმძლავრე": "1001 hp", "0-100": "2.5 წ", "ფასი": "$600,000" }
    },
    {
        name: "Bugatti Chiron SS",
        img: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800",
        desc: "სისწრაფის აბსოლუტური რეკორდსმენი.",
        specs: { "წელი": "2022", "სიმძლავრე": "1600 hp", "მაქს. სიჩქარე": "440 კმ/სთ", "ფასი": "$3,800,000" }
    },
    {
        name: "Mercedes-AMG ONE",
        img: "https://hips.hearstapps.com/hmg-prod/images/2023-mercedes-amg-one-101-1654010377.jpg?w=800",
        desc: "Formula 1-ის ტექნოლოგია გზებზე.",
        specs: { "წელი": "2023", "სიმძლავრე": "1063 hp", "0-100": "2.9 წ", "ფასი": "$2,700,000" }
    },
    {
        name: "McLaren 750S",
        img: "https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=800",
        desc: "ბრიტანული სუპერკარი წარმოუდგენელი სისწრაფით.",
        specs: { "წელი": "2024", "სიმძლავრე": "740 hp", "0-100": "2.8 წ", "ფასი": "$324,000" }
    },
    {
        name: "BMW M5 Label Red",
        img: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800",
        desc: "ყველაზე მძლავრი M სერიის ავტომობილი.",
        specs: { "წელი": "2024", "სიმძლავრე": "738 hp", "ძრავა": "V8 Hybrid", "ფასი": "$185,000" }
    },
    {
        name: "Nissan GT-R R35",
        img: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
        desc: "ლეგენდარული იაპონური 'Godzilla'.",
        specs: { "წელი": "2024", "სიმძლავრე": "565 hp", "0-100": "2.9 წ", "ფასი": "$121,000" }
    },
    {
        name: "Audi RS6 Avant",
        img: "https://images.unsplash.com/photo-1606148664425-496033325c31?w=800",
        desc: "უნივერსალი სუპერკარის მონაცემებით.",
        specs: { "წელი": "2024", "სიმძლავრე": "621 hp", "0-100": "3.3 წ", "ფასი": "$125,000" }
    },
    {
        name: "Aston Martin Valkyrie",
        img: "https://hips.hearstapps.com/hmg-prod/images/2022-aston-martin-valkyrie-101-1636039535.jpg?w=800",
        desc: "კოსმოსური დიზაინის მქონე ბრიტანული ჰიპერკარი.",
        specs: { "წელი": "2023", "სიმძლავრე": "1160 hp", "ძრავა": "V12", "ფასი": "$3,200,000" }
    }
];

const gallery = document.getElementById('gallery');
const modal = document.getElementById('carModal');
const modalTitle = document.getElementById('modalTitle');
const modalBody = document.getElementById('modalBody');
const closeBtn = document.querySelector('.close');

cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
        <img src="${car.img}" alt="${car.name}" onerror="this.src='https://via.placeholder.com/320x200?text=Image+Not+Found'">
        <div class="car-info">
            <h3>${car.name}</h3>
            <p>დააჭირე დეტალებისთვის</p>
        </div>
    `;

    card.onclick = () => {
        modalTitle.innerText = car.name;
        let infoHtml = `<p style="margin-bottom: 20px;">${car.desc}</p>`;
        
        for (let key in car.specs) {
            infoHtml += `
                <div class="spec-row">
                    <span class="spec-label">${key}:</span>
                    <span>${car.specs[key]}</span>
                </div>`;
        }
        
        modalBody.innerHTML = infoHtml;
        modal.style.display = "block";
    };

    gallery.appendChild(card);
});

closeBtn.onclick = () => modal.style.display = "none";
window.onclick = (event) => { if (event.target == modal) modal.style.display = "none"; };
