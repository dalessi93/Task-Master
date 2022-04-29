import { Autocomplete, TextField } from "@mui/material";
import { useState } from "react";
import '../style/PostFilter.css'

export function usePostFilter(){
    const [category, setCategory] = useState<any>();
    const [suburb, setSuburb] = useState<any>();
    const [state, setState] = useState<any>();
    return{
        category, suburb, state,
        render:(
        <div className="filterpost-container">
            <div className="filter">
            {/* Category Filter */}
            <Autocomplete
                value={category}
                onChange={(event: any, newValue: string | null) => {
                setCategory(newValue);
                }}
            
                id="controllable-states-demo"
                options={categoryArray}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Category" />}
            />
            </div>
            <div className="filter">
            {/* Suburb Filter */}
            <Autocomplete
                value={suburb}
                onChange={(event: any, newValue: string | null) => {
                    setSuburb(newValue);
                }}
            
                id="controllable-states-demo"
                options={suburbArray}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Suburb" />}
            />
            </div>
            <div className="filter">
            {/* State Filter */}
            <Autocomplete
                value={state}
                onChange={(event: any, newValue: string | null) => {
                    setState(newValue);
                }}
            
                id="controllable-states-demo"
                options={stateArray}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="State" />}
            />
            </div>
        </div>
    )}
}

export const categoryArray = ['Accounting', 'Appliances', 'Barber', 'Bricklayer', 'Car Detailing', 'Car Wash', 'Carpet Cleaning', 'Cleaning', 'Dog Care', 'Electricians', 'Florist', 'Handyman', 'Landscaping', 'Mechanic', 'Painting', 'Removals'];

export const suburbArray = ['Mascot', 'Bondi', 'Annandale', 'Hampton', 'Currumbin', 'Launceston', 'Gidgegannup', 'Unley', 'Fannie Bay', 'Yarralumla', 'Goodwood', 'Killarney Heights', 'Diamond Valley', 'Sassafras', 'Regency Park', 'Holder', 'Anula', 'Coolbinia'];

export const stateArray = ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'];