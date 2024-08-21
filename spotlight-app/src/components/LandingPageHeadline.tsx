import { Box, Typography } from "@mui/material";
import { useTranslation } from 'react-i18next';

function LandingPageHeadline() {
    const { t } = useTranslation('common');
    return (
        <>
            <Box
                sx={{
                    width: '50vw',
                    m: 0,
                    p: 0,
                    height: '25%',
                }}
            >
                <Typography sx={{
                    fontSize: '55px',
                    fontWeight: 'bold',
                    textAlign: 'center',
                    backgroundImage: 'linear-gradient(to right, #D3E8F8, #FFFFFF)',
                    backgroundClip: 'text',
                    color: 'transparent',
                    letterSpacing: 5
                }}>{t('landingPage.headLine.one')}<br /> {t('landingPage.headLine.two')}</Typography>
            </Box>
        </>
    );
}

export default LandingPageHeadline;