import React from "react";

const TechnicalAnalysis = () => {
  return (
    <div>
      Technical Analysis
      <div className="flex justify-center items-center">
        <iframe
          class="col-lg-12 col-md-12 col-sm-12"
          width="100%"
          height="600rem"
          src="https://component.autochartist.com/to/?broker_id=918&amp;token=33342405d3748cec6f845b7826b485f1&amp;expire=1767564000&amp;user=Trillium&amp;locale=en_GB&amp;layout=horizontal&amp;account_type=LIVE&amp;trade_now=y&amp;style=ds#/results"
        ></iframe>
      </div>
    </div>
  );
};

export default TechnicalAnalysis;
