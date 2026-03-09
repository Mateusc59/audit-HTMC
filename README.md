# Générateur d'Audits HTMC - Version Python Flask

Version stable et professionnelle avec génération PDF côté serveur.

## 🚀 Avantages

- ✅ PDFs parfaits à chaque fois (pas de problème navigateur)
- ✅ Marges et dimensions exactes
- ✅ Traduction 100% fiable
- ✅ Pas de page blanche
- ✅ Contrôle total sur le design

## 📦 Installation locale

```bash
# 1. Installer les dépendances
pip install -r requirements.txt

# 2. Lancer l'application
python app.py

# 3. Ouvrir dans le navigateur
http://localhost:5000
```

## 🌐 Déploiement gratuit

### Option 1 : Render.com (Recommandé)
1. Créer compte sur render.com
2. New → Web Service
3. Connecter ce repo Git
4. Build Command: `pip install -r requirements.txt`
5. Start Command: `gunicorn app:app`
6. Deploy !

### Option 2 : Railway.app
1. Créer compte sur railway.app
2. New Project → Deploy from GitHub
3. Sélectionner ce repo
4. Auto-détecte Python
5. Deploy !

### Option 3 : PythonAnywhere
1. Créer compte sur pythonanywhere.com (gratuit)
2. Upload les fichiers
3. Configurer Web app
4. Done !

## 📁 Structure

```
audit-python/
├── app.py              # Application Flask
├── pdf_generator.py    # Génération PDF avec ReportLab
├── requirements.txt    # Dépendances
├── templates/
│   └── index.html     # Interface web
├── static/
│   ├── style.css      # Styles
│   └── app.js         # JavaScript
└── README.md          # Ce fichier
```

## 🎨 Fonctionnalités

- Formulaire complet (même design qu'avant)
- 7 problèmes + 6 solutions à cocher
- Auto-remplissage par secteur
- Génération PDF FR + CA
- Téléchargement direct
- Responsive design

## 🔧 Personnalisation

### Modifier les traductions
Éditer `TRANSLATIONS` dans `pdf_generator.py`

### Ajouter problèmes/solutions
Éditer `PROBLEMS` et `SOLUTIONS` dans `static/app.js`

### Modifier le design PDF
Éditer la fonction `generate_audit_pdf()` dans `pdf_generator.py`

## 📞 Support

HTMC Agency
- Email: contact@htmcagency.com
- Tél: +33 7 69 16 56 34