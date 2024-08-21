import { Box, Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function LandingPageCategoryItems() {
    const listOfCategoryItems = ["Civil and Political Rights",
        "Economic Rights",
        "Social Rights",
        "Women’s Rights",
        "Disability Rights",
        "Gender Rights",
        "Cultural Rights",
        "Children’s Rights",
        "Indigenous Rights",
        "Refugee Rights",
        "Men’s Rights"];
    const navigate = useNavigate();
    const routeChangeToHome = () =>{ 
        let path = `home/homePage`; 
        navigate(path);
    }
    const { t } = useTranslation('common');

     // Map the provided categories to your translation keys
     const categoryToKey = {
        "disability_rights": "issue.category1",
        "civil_and_political_rights": "issue.category2",
        "economic_rights": "issue.category3",
        "social_rights": "issue.category4"
    };

    return (
        <>
            <Box
                sx={{
                    width: '50vw',
                    m: 0,
                    pl: 2,
                    pt: 5,
                    mb: 2,
                    height: '38%',
                    overflow: 'scroll'
                }}
            >
                <Stack direction="row" spacing={2} useFlexGap sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , flexWrap: 'wrap'}}>
                    {listOfCategoryItems.map((item) => {
                        return (
                                <Button onClick={routeChangeToHome} variant="outlined" sx={{
                                    backgroundColor: '#162129',
                                     color: '#FFFFFF', borderColor: '#5099C6',
                                     borderRadius: 20,
                                    "&:hover": {
                                        backgroundColor: 'black',
                                        borderColor: '#5099C6'
                                    }
                                }}>{item}</Button>
                        );
                    })}
                </Stack>
            </Box >
        </>
    );
}

export default LandingPageCategoryItems;