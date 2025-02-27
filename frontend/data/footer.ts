export interface Footer {
    socials: {
        name: string
        url: string
    }[],
    sections: {
        name: string
        links: {
            name: string
            to: string
        }[]
    }[]
}

export const footerData: Footer = {
    socials: [
        {
            name: 'Facebook',
            url: 'http://example.com'
        },
        {
            name: 'TikTok',
            url: 'http://example.com'
        },
        {
            name: 'Instagram',
            url: 'http://example.com'
        }
    ],
    sections: [
        {
            name: 'Aide',
            links: [
                {
                    name: 'Acheter en ligne',
                    to: '/'
                },
                {
                    name: 'Paiement',
                    to: '/'
                },
                {
                    name: 'Livraison',
                    to: '/'
                },
                {
                    name: 'Retours',
                    to: '/'
                },
                {
                    name: 'Carte cadeau',
                    to: '/'
                },
                {
                    name: 'Ticket cadeau',
                    to: '/'
                },
                {
                    name: 'Rechercher un ticket de caisse',
                    to: '/'
                },
                {
                    name: "Achat en tant qu'invité",
                    to: '/'
                },
                {
                    name: 'Ticket életronique',
                    to: '/'
                },
                {
                    name: 'Me désabonner',
                    to: '/'
                },
            ]
        },
        {
            name: 'A propos',
            links: [

            ]
        }
    ]
}
