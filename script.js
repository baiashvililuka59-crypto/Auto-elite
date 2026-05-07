const cars = [
    {
        name: "Ferrari SF90 Spider",
        img: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=800&q=80",
        desc: "1000 hp | Hybrid Power"
    },
    {
        name: "Porsche 911 GT3",
        img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80",
        desc: "510 hp | Track Monster"
    },
    {
        name: "BMW M4 Competition",
        img: "https://images.unsplash.com/photo-1617814076367-b759c7d6274a?auto=format&fit=crop&w=800&q=80",
        desc: "510 hp | German Engineering"
    }
];

const gallery = document.getElementById('gallery');

cars.forEach(car => {
    const card = document.createElement('div');
    card.className = 'car-card';
    card.innerHTML = `
        <img src="${car.img}">
        <div class="car-info">
            <h3>${car.name}</h3>
            <p>${car.desc}</p>
        </div>
    `;
    gallery.appendChild(card);
});
