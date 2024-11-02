import React from "react";

const Calendar = () => {
  return (
    <div>
      Calendar
      <div className="flex justify-center items-center">
        <iframe
          class="col-lg-12 col-md-12 col-sm-12"
          width="100%"
          height="600rem"
          src="https://eia.autochartist.com/calendar/?broker_id=918&amp;nextdays=3&amp;token=33342405d3748cec6f845b7826b485f1&amp;expire=1767564000&amp;user=Trillium&amp;locale=en&amp;style=ds#/calendar"
        ></iframe>
      </div>
    </div>
  );
};

export default Calendar;
