from flask import Flask, render_template, request

app = Flask(__name__)

# Mes donnees
profiles = {
    "name": "Larissa",
    "lastname": "KOUSSEY",
    "initials": "LK",
    "role": "Développeur Full Stack",
    "tagline": "Développeur web passionné par la création d'expériences web modernes et performantes.",
    "available": True,
    "email": "larissakousseypro@email.com",
    "linkedin": "https://bj.linkedin.com/in/larissa-koussey-772109385",
    "github": "https://github.com/carilise",
    "formation": "Systeme informatique et logiciel",
    "langues": "Français, Anglais",
    "apprentissage": "Python, PostgreSQL",
}

skills = [
    {"name": "HTML / CSS",         "level": 95},
    {"name": "Bases de données",   "level": 75},
    {"name": "Git",            "level": 70},
    {"name": "Laravel", "level": 60},
    {"name": "React Vite", "level": 40},
    {"name": "JavaScript ",     "level": 40},
    {"name": "Symphonie", "level": 30},
    {"name": "Python",             "level": 10},
    {"name": "PostgreSQL", "level": 5},
]

projects = [
    {
        "title": "MonitoPets — E-commerce de chiots",
        "description": "Un site e-commerce élégant dédié à l'adoption de chiots. Intégration pixel-perfect d'une maquette Figma avec des composants React réutilisables et une expérience utilisateur fluide.",
        "tags": ["HTML", "CSS", "React", "TypeScript", "Vite"],
        "image": "static/img/A.png",
        "alt": "MonitoPets Challenge",
        "code_url": "https://github.com/carilise/MonitoPetsChallenge3",
        "demo_url": "https://carilise.github.io/MonitoPetsChallenge3/",
    },
    {
        "title": "TheFrenchTototte — Boutique bébé",
        "description": "Une boutique en ligne chic et moderne pour produits bébé made in France. Design épuré, typographie soignée et fidélité totale à la maquette Figma originale.",
        "tags": ["HTML", "CSS", "React", "TypeScript", "Vite"],
        "image": "static/img/B.png",
        "alt": "TheFrenchTototte",
        "code_url": "https://github.com/carilise/TheFrenchTototte",
        "demo_url": "https://carilise.github.io/TheFrenchTototte/",
    },
    {
        "title": "Futuristic App — Interface nouvelle génération",
        "description": "Une interface web au design avant-gardiste et immersif. Animations CSS avancées, effets visuels modernes et mise en page audacieuse inspirée de l'univers futuriste.",
        "tags": ["HTML", "CSS", "JavaScript"],
        "image": "static/img/C.png",
        "alt": "Futuristic App",
        "code_url": "https://github.com/carilise/Futuristic_App",
        "demo_url": "https://carilise.github.io/Futuristic_App/",
    },
    {
        "title": "Portfolio Personnel — Larissa KOUSSEY",
        "description": "Mon portfolio professionnel conçu de A à Z — de la maquette au déploiement. Stack hybride HTML/CSS/JavaScript en frontend et Python Flask en backend pour une architecture moderne et dynamique.",
        "tags": ["HTML", "CSS", "JavaScript", "Python", "Flask"],
        "image": "static/img/d.png",
        "alt": "Portfolio personnel",
        "code_url": "https://github.com/carilise/PORTOFOLIOLARI",
        "demo_url": "#",
    },
    {
        "title": "Mini Calculatrice — Simple & Efficace",
        "description": "Une calculatrice web minimaliste et intuitive. Opérations de base, interface claire et interactions dynamiques en JavaScript pur — un classique revisité avec soin.",
        "tags": ["HTML", "CSS", "JavaScript"],
        "image": "static/img/e.png",
        "alt": "Mini Calculatrice",
        "code_url": "https://github.com/carilise/calculatrice",
        "demo_url": "#",
    },
]
beyond = {
    "highlight": " Commerçante en ligne",
    "description": [
        "En dehors du développement web, je dirige LariSTORE, ma boutique en ligne dédiée à la personnalisation d'articles. Je crée des pièces uniques et sur-mesure pour mes clients.",
        "Cette activité m'a permis de développer un vrai sens du design, de l'expérience client et du commerce digital — des compétences qui enrichissent aussi mon travail de développeuse.",
    ],
    "categories": [
        {"label": "Accessoires & bijoux"},
        {"label": "Objets déco & cadeaux"},
        {"label": "Articles bébé & enfants"},
        {"label": "Vêtements & textiles"},
        {"label": "Gourdes personnalisées"},
        {"label": "Et bien plus encore..."},
    ],
    "shop_url": "https://laristore.vercel.app/",
    "shop_name": "LariSTORE",
    "shop_sub": "Boutique de personnalisation en ligne",
    "produits": [
        {"text": "Accessoires personnalisés"},
        {"text": "Cadeaux sur mesure"},
        {"text": "Articles bébé"},
        {"text": "Textiles & vêtements"},
        {"text": "Gourdes personnalisées"},
        {"text": "Et bien plus encore"},
    ],
}


# ── Route principale ──
@app.route("/")
def index():
    return render_template(
        "index.html",
        profiles=profiles,
        skills=skills,
        projects=projects,
        beyond=beyond,

    )

if __name__ == "__main__":
    app.run(debug=True)
