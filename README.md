# Générateur d'Audits - HTMC Agency

## 📦 Installation

### Option 1 : Simple (sans serveur)
1. Double-cliquez sur `index.html`
2. Ça s'ouvre dans votre navigateur
3. C'est tout ! ✅

### Option 2 : Avec serveur local (recommandé)

#### Avec Python :
```bash
# Dans le dossier du projet
python3 -m http.server 8000
```
Puis ouvrir : http://localhost:8000

#### Avec Node.js :
```bash
# Installer live-server globalement
npm install -g live-server

# Lancer
live-server
```

#### Avec VS Code :
1. Installer l'extension "Live Server"
2. Clic droit sur `index.html`
3. Sélectionner "Open with Live Server"

## 📁 Structure des fichiers

```
audit-project/
├── index.html          # Page principale
├── styles.css          # Tous les styles
├── data.js             # Problèmes et solutions
├── templates.js        # Génération HTML de l'audit
├── pdf-generator.js    # Téléchargement PDF
├── app.js              # Logique principale
└── README.md           # Ce fichier
```

## 🎯 Comment utiliser

1. **Remplir le formulaire** : Nom, secteur, localisation, etc.
2. **Cliquer "Auto-remplir"** : Remplit automatiquement selon le secteur
3. **Cocher problèmes/solutions** : Personnaliser selon le client
4. **Générer l'audit** : PDF professionnel généré

## 📥 Téléchargement PDF

### Méthode actuelle (la plus fiable) :
1. Cliquer sur "🖨️ Imprimer / PDF"
2. Dans la fenêtre d'impression, choisir "Enregistrer en PDF"
3. Nommer et sauvegarder

### Pour améliorer (à faire ensemble) :
- Décommenter le code dans `pdf-generator.js`
- Ajouter la bibliothèque html2pdf.js
- Implémenter la traduction catalane complète

## 🔧 Améliorations à faire

### Priorités :
- [ ] Téléchargement PDF automatique FR/CA
- [ ] Traduction catalane complète
- [ ] Ajuster la taille du PDF (pleine page)
- [ ] Réduire légèrement le texte si nécessaire

### Nice to have :
- [ ] Prévisualisation en temps réel
- [ ] Sauvegarde des audits
- [ ] Templates multiples
- [ ] Export Word

## 💡 Notes pour développement

### Pour tester les modifications :
1. Modifier les fichiers dans VS Code
2. Sauvegarder (Ctrl+S)
3. Rafraîchir le navigateur (F5)
4. Voir les changements immédiatement

### Fichiers à modifier selon le besoin :
- **Design/CSS** → `styles.css`
- **Contenu de l'audit** → `templates.js`
- **Problèmes/Solutions** → `data.js`
- **Logique** → `app.js`
- **PDF** → `pdf-generator.js`

## 🐛 Problèmes connus

1. **Téléchargement PDF** : Utiliser Ctrl+P pour l'instant
2. **Traduction catalane** : Partielle, à compléter
3. **Taille PDF** : À ajuster pour pleine page

## 📞 Contact

HTMC Agency
- Email: contact@htmcagency.com
- Tél: +33 7 69 16 56 34
- Web: htmcagency.com