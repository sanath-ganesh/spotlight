import { Box, Button, Container } from "@mui/material";
import lpCoverImg from '../assets/landing-page-cover.svg';
import LandingPageHeader from "../components/LandingPageHeader";
import LandingPageHeadline from "../components/LandingPageHeadline";
import LandingPageCategoryItems from "../components/LandingPageCategoryItems";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllComments } from "../services/comment-services";
import { fetchAllIssues } from "../services/issue-services";
import { fetchAllIssueInteractions, fetchAllCommentInteractions } from "../services/issueInteractionType-services";
import { fetchNPopulateIssuesListStore } from "../store/Issue-Slice";

/**
 * Component for the landing page.
 */
function LandingPage() {
    let navigate = useNavigate();
    const { t } = useTranslation('common');

    // Function to navigate to the login page
    const routeChangeToLogin = () => {
        let path = `login`;
        navigate(path);
    }

    // Function to navigate to the registration page
    const routeChangeToRegister = () => {
        let path = `register`;
        navigate(path);
    }

    // Function to navigate to the authority registration page
    const routeChangeToAuthorityRegister = () => {
        let path = `authority-register`;
        navigate(path);
    }

    // Redux store dispatch hook
    const dispatch = useDispatch();

    // Function to fetch issues, comments, and interaction types
    const fetchIssues = async () => {
        const issues = await fetchAllIssues();
        const commentsList = await getAllComments();
        const issueInteractionTypeList = await fetchAllIssueInteractions();
        const commentInteractionTypeList = await fetchAllCommentInteractions();

        // Processing comments
        commentsList.forEach((comment) => {
            comment.commentInteractions.forEach((commentId, index) => {
                comment.commentInteractions[index] = commentInteractionTypeList.find((item) => item._id === commentId);
            })

            comment.subComments.forEach((subComment, index) => {
                comment.subComments[index] = commentsList.find((item) => item._id === subComment);
            })
        });

        // Processing issues
        issues.forEach((issue) => {
            issue.issueComments.forEach((commentId, index) => {
                issue.issueComments[index] = commentsList.find((item) => item._id === commentId);
            });

            issue.issueInteractions.forEach((issueInterId, index) => {
                issue.issueInteractions[index] = issueInteractionTypeList.find((item) => item._id === issueInterId)
            });
        })

        return issues;
    }

    // Fetch issues on component mount
    useEffect(() => {
        const fetch = async () => {
            const issues = await fetchIssues();
            dispatch(fetchNPopulateIssuesListStore(issues));
        }
        fetch();
    }, []);

    return (
        <>
            {/* Container for the landing page */}
            <Container maxWidth="xl" sx={{
                backgroundColor: '#2D4252',
                display: 'flex',
                "&": {
                    p: 0
                }
            }}>
                {/* Left side of the landing page */}
                <Box
                    sx={{
                        width: '50vw',
                        height: '100vh',
                        m: 0,
                        p: 0,
                        borderRadius: 1,
                    }}
                >
                    {/* Header */}
                    <LandingPageHeader></LandingPageHeader>
                    {/* Headline */}
                    <LandingPageHeadline></LandingPageHeadline>
                    {/* Items */}
                    <LandingPageCategoryItems></LandingPageCategoryItems>
                    {/* Sign in and register buttons */}
                    <Box
                        sx={{
                            width: '50vw',
                            m: 0,
                            pl: 2,
                            pt: 5,
                            display: 'flex',
                            justifyContent: 'center',
                            gap: 2
                        }}>
                        <Button onClick={routeChangeToLogin} variant="outlined" sx={{
                            backgroundImage: 'linear-gradient(to bottom, #71ACD1, #3A586B)',
                            color: '#FFFFFF', border: 0,
                            "&:hover": {
                                backgroundImage: 'linear-gradient(to left, #162129, #3A586B)',
                                border: 1
                            }
                        }}>{t('button.signin')}</Button>
                        <Button onClick={routeChangeToRegister} variant="outlined" sx={{
                            backgroundImage: 'linear-gradient(to bottom, #71ACD1, #3A586B)',
                            color: '#FFFFFF', border: 0,
                            "&:hover": {
                                backgroundImage: 'linear-gradient(to left, #162129, #3A586B)',
                                border: 1,
                            }
                        }}>{t('button.create')}</Button>
                    </Box>
                </Box>
                {/* Right side of the landing page with the cover image */}
                <Box
                    sx={{
                        width: '50vw',
                        height: '100vh',
                        color: 'blue',
                        backgroundImage: `url(${lpCoverImg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        mixBlendMode: 'luminosity',
                        WebkitMaskImage: 'linear-gradient(to left, #2D4252 10%, transparent 100%)',
                        maskImage: 'linear-gradient (#2D4252 , transparent)'
                    }}
                />
            </Container >
        </>
    );
}

export default LandingPage;