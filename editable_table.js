
function EditableTable() {

    const{useState} = React;

    const [data, setData] = useState([
        { rowName: "Onbording Call", column1: "", column2: "", column3: "" },
        { rowName: "Google Search Console Access", column1: "", column2: "", column3: "" },
        { rowName: "Google Analytics Access", column1: "", column2: "", column3: "" },
        { rowName: "Website Access", column1: "", column2: "", column3: "" },
        { rowName: "Technical Audit", column1: "", column2: "", column3: "" },
        { rowName: "Anchor Text and Semiantic Analysis", column1: "", column2: "", column3: "" },
        { rowName: "Competitor Analysis", column1: "", column2: "", column3: "" },
        { rowName: "Anchor Text ? URL Mapping", column1: "", column2: "", column3: "" },
        { rowName: "Google Data Studio Report + Local Reporting Suite", column1: "", column2: "", column3: "" },
        { rowName: "Site Level Optimization", column1: "", column2: "", column3: "" },
        { rowName: "On Page Optimization", column1: "", column2: "", column3: "" },
        { rowName: "Content Creation", column1: "", column2: "", column3: "" },
        { rowName: "Content Publishing", column1: "", column2: "", column3: "" },
        { rowName: "Premium Press Release", column1: "", column2: "", column3: "" },
        { rowName: "Authority Niche Placements", column1: "", column2: "", column3: "" },
        { rowName: "Review Management", column1: "", column2: "", column3: "" },
        { rowName: "Index Links", column1: "", column2: "", column3: "" },
        { rowName: "Video Recap", column1: "", column2: "", column3: "" }
    ]);

    const handleCellChange = (event, rowIndex, columnName) => {
        const updatedData = [...data];
        updatedData[rowIndex][columnName] = event.target.textContent;
        setData(updatedData);
    };

    const postData = () => {
        alert(`Data Posted => ${JSON.stringify(data)}`);
        console.log(data); // Replace with code to post data to API
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            <th>{row.rowName}</th>
                            <EditableCell
                                value={row.column1}
                                onChange={(event) => handleCellChange(event, rowIndex, "column1")}
                            />
                            <EditableCell
                                value={row.column2}
                                onChange={(event) => handleCellChange(event, rowIndex, "column2")}
                            />
                            <EditableCell
                                value={row.column3}
                                onChange={(event) => handleCellChange(event, rowIndex, "column3")}
                            />
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={postData}>Post Data</button>
        </div>
    );
}

function EditableCell({ value, onChange }) {
    return (
        <td contentEditable="true" onBlur={onChange}>
            {value}
        </td>
    );
}

ReactDOM.render(<EditableTable />, document.getElementById("table_container"))