export const NAVIGATION_LINK: any[] = [
    {
        label: 'Program',
        children: [
            {
                label: 'Create Program',
                link: `/program/create`,
                disabled: false,
            },
            {
                label: 'Display Program',
                link: `/program/display`,
                disabled: false,
            },
            {
                label: 'Modify Program',
                link: `/program/modify`,
                disabled: false,
            },
            {
                label: 'List Program',
                link: `/program/list`,
                disabled: false,
            }
        ],
    },
    {
        label: 'Squad',
        children: [
            {
                label: 'Create Squad',
                link: `/squad/create`,
                disabled: false,
            },
            {
                label: 'Display Squad',
                link: `/squad/display`,
                disabled: false,
            },
            {
                label: 'Modify Squad',
                link: `/squad/modify`,
                disabled: false,
            },
            {
                label: 'List Squad',
                link: `/squad/list`,
                disabled: false,
            }
        ],
    }
];