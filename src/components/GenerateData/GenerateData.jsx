import React, { useRef } from 'react';
import { generateTitles } from '../../utils/generateTitles';
import { generateCredits } from '../../utils/generateCredits';
import { CSVLink } from 'react-csv';

export const GenerateData = () => {
  const titlesLink = useRef();
  const creditsLink = useRef();
  const titles = generateTitles();
  const credits = generateCredits(titles);

  const handleGenerateTitles = () => {
    titlesLink.current.link.click();
    creditsLink.current.link.click();
  };

  return (
    <>
      <button type="button" onClick={handleGenerateTitles}>
        Generate Data
      </button>
      <CSVLink data={titles} ref={titlesLink} filename={'titles.csv'} />
      <CSVLink data={credits} ref={creditsLink} filename={'credits.csv'} />
    </>
  );
};
