import { Box, Button } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// import { useData, useUpdateData } from "./api";
import { RichTextEditor } from "./RichTextEditor";

// Example of fetching the raw HTML from server. The raw html has background color, but it is not rendering in the editor.

const htmlString = `
<p dir="ltr"><span style="white-space: pre-wrap;">EX-10.12d903599dex101.htmEX-10.1EX-10.1</span></p>
<p dir="ltr"><b><strong class="bold" style="white-space: pre-wrap;">Exhibit 10.1</strong></b></p>
<p dir="ltr"><i><b><strong class="bold italic" style="white-space: pre-wrap;">EXECUTION VERSION</strong></b></i></p>
<p dir="ltr"><u><span class="underline" style="white-space: pre-wrap;">FIRST AMENDMENT TO CREDIT AGREEMENT</span></u></p>
<p dir="ltr"><span style="white-space: pre-wrap;">THIS FIRST AMENDMENT TO CREDIT AGREEMENT, dated as of December&nbsp;17, 2024 (including the annexes, </span>
<b><strong class="bold" style="white-space: pre-wrap;">schedules, exhibits and oth\`er</strong></b>
<span style="white-space: pre-wrap;">  attachments hereto, this “ </span>
<u><span class="underline" style="white-space: pre-wrap;">First Amendment</span></u>
<span style="white-space: pre-wrap;"> ”), by and among Vistra Zero Operating Company, LLC, a Delaware limited liability company (the “ </span>
<u><span class="underline" style="white-space: pre-wrap;">Borrower</span></u>
<span style="white-space: pre-wrap;"> ”), the </span>
<i><em class="italic" style="white-space: pre-wrap;"> Lenders party here</em></i>
<span style="white-space: pre-wrap;"> to and </span>
<mark style="white-space: pre-wrap;"><span>Citibank</span></mark>
<span style="white-space: pre-wrap; color:yellow">, N.A., as </span>
<span style="background: rgb(208, 2, 27); white-space: pre-wrap;">Administrative Agent  </span>
<span style="white-space: pre-wrap;">and as Collateral Agent. Capitalized terms used but not defined herein shall have the respective meanings assigned to such terms in the Credit Agreement (as modified hereby).</span></p>

<p dir="ltr"><b><strong class="bold" style="white-space: pre-wrap;">RECITALS:</strong></b></p>

<p dir="ltr"><b><strong class="bold" style="white-space: pre-wrap;">WHEREAS</strong></b>
<span style="white-space: pre-wrap;"> , reference is hereby made to the Credit Agreement, dated as of March&nbsp;26, 2024 </span>
<b><strong class="bold" style="white-space: pre-wrap;"> </strong></b>
<span style="white-space: pre-wrap;">(as amended, restated, amended and restated, supplemented and/or otherwise modified from time to time prior to the First Amendment Effective Date referred to below, the “ </span>
<u><span class="underline" style="white-space: pre-wrap;">Credit Agreement</span></u>
<span style="white-space: pre-wrap;"> ”), among the Borrower, the Lenders party thereto, the Administrative Agent and the Collateral Agent;</span></p>

<p dir="ltr"><b><strong class="bold" style="white-space: pre-wrap;">WHEREAS</strong></b>
<span style="white-space: pre-wrap;"> , pursuant to </span>
<b><strong class="bold" style="white-space: pre-wrap;"> </strong></b>
<u><span class="underline" style="white-space: pre-wrap;">Sections 13.1</span></u>
<span style="white-space: pre-wrap;"> </span>
<b><strong class="bold" style="white-space: pre-wrap;"> </strong></b>
<span style="white-space: pre-wrap;">and </span>
<b><strong class="bold" style="white-space: pre-wrap;"> </strong></b>
<u><span class="underline" style="white-space: pre-wrap;">13.7</span></u>
<span style="white-space: pre-wrap;"> </span>
<b><strong class="bold" style="white-space: pre-wrap;"> </strong></b>
<span style="white-space: pre-wrap;">of the Credit Agreement, the Borrower and </span>
<b><strong class="bold" style="white-space: pre-wrap;"> </strong></b>
<span style="white-space: pre-wrap;">certain of the Lenders party hereto constituting not less than all of the Lenders holding Initial Term Loans directly and adversely affected by the terms of this First Amendment and the transactions contemplated hereby agree to a decrease of the interest rate margins applicable to the Initial Term Loans under the Credit Agreement as set forth herein, in each case subject to the terms and conditions hereof; and</span></p>

<p dir="ltr"><b><strong class="bold" style="white-space: pre-wrap;">WHEREAS</strong></b>
<span style="white-space: pre-wrap;"> , pursuant to </span>
<b><strong class="bold" style="white-space: pre-wrap;"> </strong></b>
<u><span class="underline" style="white-space: pre-wrap;">Section&nbsp;13.1</span></u>
<span style="white-space: pre-wrap;"> </span>
<b><strong class="bold" style="white-space: pre-wrap;"> </strong></b>
<span style="white-space: pre-wrap;">of the Credit Agreement, the Borrower and the Lenders </span>
<b><strong class="bold" style="white-space: pre-wrap;"> </strong></b>
<span style="white-space: pre-wrap;">party hereto agree to amend certain other provisions of the Credit Agreement as set forth herein, in each case subject to the terms and conditions hereof.</span></p>

<p dir="ltr"><b><strong class="bold" style="white-space: pre-wrap;">NOW, THEREFORE</strong></b>
<span style="white-space: pre-wrap;"> , in consideration of the premises and agreements, provisions and </span>
<b><strong class="bold" style="white-space: pre-wrap;"> </strong></b>
<span style="white-space: pre-wrap;">covenants herein contained, the parties hereto agree as follows:</span></p>

<p dir="ltr"><b><strong class="bold" style="white-space: pre-wrap;">A.</strong></b></p>
`;

export default function Form() {
  const [value, setValue] = useState("");
  // const { mutateAsync: saveText, isPending } = useUpdateData();
  // const { data } = useData();

  useEffect(() => {
    setTimeout(() => {
      setValue(htmlString);
    }, 1000);
  }, []);

  const onSave = () => {
    // saveText(value);
    console.log(value);
  };

  return (
    <Box p={2}>
      <RichTextEditor
        placeholder="Write Post"
        name="post"
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
      <Button colorScheme="whatsapp" size="xs" mt={2} onClick={onSave}>
        {/* {isPending ? "Saving..." : "Save"} */}
        Save
      </Button>
    </Box>
  );
}
