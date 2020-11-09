import cleanup from './cleanup';

test('Cleanup', async () => {
    const content = `<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.33541 5.22673L11.3365 5.22673L11.3365 6.56044H7.33541V5.22673Z" fill="#2B2D33"/>
        <path d="M4.66799 9.22787L8.66912 9.22787V7.89416H4.66799L4.66799 9.22787Z" fill="#2B2D33"/>
        <path d="M8.66912 11.8953H7.33541V10.5616H8.66912V11.8953Z" fill="#2B2D33"/>
        <path d="M4.66799 11.8953H6.0017V10.5616H4.66799V11.8953Z" fill="#2B2D33"/>
        <path d="M4.66799 5.22673H6.0017V6.56044H4.66799V5.22673Z" fill="#2B2D33"/>
        <path d="M10.0028 9.22787H11.3365V7.89416H10.0028V9.22787Z" fill="#2B2D33"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.66742 1.89246C1.93083 1.89246 1.33371 2.48958 1.33371 3.22617V13.8959C1.33371 14.6324 1.93083 15.2296 2.66742 15.2296H13.3371C14.0737 15.2296 14.6708 14.6324 14.6708 13.8959V3.22617C14.6708 2.48958 14.0737 1.89246 13.3371 1.89246H2.66742ZM13.3371 3.22617H2.66742V13.8959H13.3371V3.22617Z" fill="#2B2D33"/>
        </svg>
    `;

    const svgo = await cleanup(content);

    expect(svgo.data).toMatchSnapshot();
    expect(svgo.info).toEqual({ width: '17', height: '17' });
});
