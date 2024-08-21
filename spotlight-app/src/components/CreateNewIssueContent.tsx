import { Autocomplete, Button, Card, CardContent, Chip, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import * as IssueService from "../services/issue-services";
import { addNewIssueStore, getIssueList } from "../store/Issue-Slice";
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from "../store";

// Component for creating a new issue
function CreateNewIssueContent() {
    // State variables for managing form input values
    const [title, setTitle] = useState<string>("");
    const [selectCategories, setSelectedCategories] = useState<number[]>([]);
    const [categoryList, setCategoryList] = useState<string[]>([]);
    const [location, setLocation] = useState<string>("");
    const [description, setDescription] = useState<string>("");

    // Redux store access
    const dispatch = useDispatch();
    const data = useSelector(getIssueList());
    console.log("data from store: ", data);

    // Function to add a new issue
    const addNewIssue = () => {
        const issueToBeAdded = {
            _id: "",
            userId: "110",
            issueTitle: title,
            issueDescription: description,
            issueComments: [],
            issueCategory: categoryList,
            issueDate: new Date().toString(),
            issueInteractions: [],
            issueLocation: "Boston",
            isResolved: false
        };

        // Call the issue service to add the issue
        IssueService.addNewIssue(issueToBeAdded);
        // Dispatch an action to update the Redux store
        dispatch(addNewIssueStore(issueToBeAdded));
    }

    // List of available issue categories
    const listOfIssues = ["Civil and Political Rights",
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

    // Function to handle click on category chip
    const handleClick = (index: number) => {
        console.info('You clicked the Chip.');
        if (selectCategories.includes(index)) {
            setSelectedCategories(selectCategories.filter((category) => category != index));
            setCategoryList(categoryList.filter((category) => category !== listOfIssues[index]));
        } else {
            setSelectedCategories([...selectCategories, index]);
            setCategoryList([...categoryList, listOfIssues[index]]);
        }
    };

    // Function to handle location selection
    const selectLocation = (updatedLocation: string) => {
        setLocation(updatedLocation);
        console.log("location: " + location);
    }

    // Function to handle description text input
    const selectDescriptionText = (updatedDescription: string) => {
        setDescription(updatedDescription);
    }

    // Function to handle title input
    const selectTitle = (updatedTitle: string) => {
        setTitle(updatedTitle);
    }

    return (
        <>
            <center>
                {/* Title Card */}
                <Card sx={{ width: '100%', backgroundColor: '#2b5d7f1c', padding: 0 }}>
                    <CardContent sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ fontSize: 20, padding: 0, margin: 0, color: '#7695ab' }}>
                            Issue Title
                        </Typography>
                    </CardContent>
                </Card>
                {/* Title Input */}
                <TextField
                    id="outlined-textarea"
                    placeholder="Give a title to your Issue"
                    sx={{
                        mt: '10px', width: '400px',
                        '& .MuiOutlinedInput-root': {
                            height: '40px',
                        },
                    }}
                    onChange={(event) => selectTitle(event.target.value)}
                />

                {/* Category Selection Card */}
                <Card sx={{ height: 30, width: 500, backgroundColor: '#2b5d7f1c', padding: 0, mt: '20px' }}>
                    <CardContent sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ fontSize: 20, padding: 0, margin: 0, color: '#7695ab' }}>
                            Select Issue Category (One or more)
                        </Typography>
                    </CardContent>
                </Card>
                {/* Category Chips */}
                <Stack direction={{ xs: 'column', sm: 'row' }}
                    sx={{ margin: '5px', mt: '8px', display: 'flex', justifyContent: 'center' }}
                    spacing={{ xs: 1 }} useFlexGap flexWrap={"wrap"}>
                    {listOfIssues.map((topic, index) => {
                        return (
                            <Chip key={index} label={topic} onClick={() => handleClick(index)}
                                variant={selectCategories.includes(index) ? 'filled' : 'outlined'}
                                sx={{ m: '5px', bgcolor: selectCategories.includes(index) ? '#ffa31a' : '' }}
                            />
                        )
                    })}
                </Stack>

                {/* Location Card */}
                <Card sx={{ width: '100%', backgroundColor: '#2b5d7f1c', padding: 0, mt: '20px' }}>
                    <CardContent sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ fontSize: 20, padding: 0, margin: 0, color: '#7695ab' }}>
                            Location
                        </Typography>
                    </CardContent>
                </Card>
                {/* Location Input */}
                <TextField
                    id="outlined-textarea"
                    placeholder="Your Location"
                    sx={{
                        mt: '10px', width: '400px',
                        '& .MuiOutlinedInput-root': {
                            height: '40px',
                        },
                    }}
                    onChange={(event) => selectLocation(event.target.value)}
                />

                {/* Description Card */}
                <Card sx={{ width: '100%', backgroundColor: '#2b5d7f1c', padding: 0, mt: '20px' }}>
                    <CardContent sx={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ fontSize: 20, padding: 0, margin: 0, color: '#7695ab' }}>
                            Description
                        </Typography>
                    </CardContent>
                </Card>
                {/* Description Input */}
                <TextField
                    id="outlined-textarea"
                    placeholder="Describe the issue"
                    multiline
                    maxRows={4}
                    sx={{
                        mt: '10px', width: '400px',
                        '& .MuiOutlinedInput-root': {
                            height: '100px',
                        },
                    }}
                    onChange={(event) => selectDescriptionText(event.target.value)}
                />

                {/* Submit Button */}
                <Button variant="contained" sx={{ mt: '20px', backgroundColor: '#e97a29' }} onClick={() => addNewIssue()}>
                    Submit Issue
                </Button>
            </center>
        </>
    )
}

export default CreateNewIssueContent;