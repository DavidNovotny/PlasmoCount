import React from "react";

const About = () => {
  return (
    <div className="ui text container">
      <h1>About</h1>
      <p>
        <b>
          PlasmoCount is an online web tool for the automated detection and
          staging of malaria parasites from Giemsa smears. It takes as input
          multiple raw images of a Giemsa-stained thin blood film and outputs
          measures of parasitaemia and parasite life stage development.
        </b>
      </p>
      <p>
        <b>Disclaimer</b>: PlasmoCount is currently in beta-testing.
         It should be tested on a user-to-user basis and not be used for
         medical diagnosis. For full details of our first version see
         the paper: Davidson, M., Andradi-Brown, C., Yahiya, S., Chmielewski, J.,
          O’Donnell, A., Gurung, P., . . . Baum, J. (2021). Automated detection
          and staging of malaria parasites from cytological smears using convolutional
          neural networks. <em>Biological Imaging</em>, 1, E2. doi:10.1017/S2633903X21000015
      </p>
      <h2>Uploading your data</h2>
      <img
        alt="PlasmoCount upload form"
        className="ui medium left floated image"
        src="/images/upload.png"
      ></img>
      <p>
        To upload your data, please fill out your email address so that we can send you
        your results. We are now supporting <em>Plasmodium falciparum</em> data and rodent malarias
        <em>P. berghei, P. chabaudi</em> and <em>P. yoelii</em>, feel free to test the tool with your own data
        for the purpose of cell counting or detection of infection. Our gametocytes tool is
        currently still in development.
      </p>
      <p>
        For the image upload, please upload images in either <b>.tiff</b>,{" "}
        <b>.jpg</b> or <b>.png </b>
        format. PlasmoCount works best with:
      </p>
      <li>Images taken at 100x magnification</li>
      <li>&lt; 200 cells in FOV</li>
      <li>Low cell density (few overlapping RBCs)</li>
      <h2>Submitting your data</h2>
      <p>
        Every submission will have a unique job ID associated to it. When you
        submit your job, you will be redirected to your results page. You do not
        need to stay on this page; you can come back at any time.
      </p>
      <img
        alt="PlasmoCount life stage histogram"
        className="ui large centered image"
        src="/images/jobId.png"
      ></img>
      <h2>Interpreting your results</h2>
      <h3>Summary</h3>
      <p>
        The Summary section consists of two pie charts that report on
        parasitaemia and parasite life stage distribution and an interactive
        asexual stage distribution histogram.
      </p>
      <img
        alt="PlasmoCount life stage histogram"
        className="ui fluid image"
        src="/images/summary.png"
      ></img>
      <h4>Life stage distribution histogram</h4>
      <p>
        The histogram shows the life stages as computed by the model. The
        current cut-offs used to count the ring, trophozoite, and schizont
        stages are 1.5 and 2.5. You can change the bin size to group different
        cells together. The histogram provides a good opportunity for you to
        check the model performance. You can click on a bin to display the
        associated infected RBCs.
      </p>
      <img
        alt="PlasmoCount table"
        className="ui medium right floated image"
        src="/images/table.png"
      ></img>
      <h3>Table</h3>
      <p>
        The table displays the results for each image individually. You can
        select an image by clicking on a table row. This will display your image
        with overlaying predictions.
      </p>

      <h3>Export</h3>
      <p>
        You can export your results in CSV format by clicking the Export button.
      </p>

      <h2>Mobile device compatibility</h2>
      <p>
        The user interface has been designed with mobile devices in mind. It has
        been tested with microscopy images taken down the microscope with an
        iPhone at 2x zoom. After submitting, you can view your results on your
        desktop by navigating to the unique job link.
      </p>
      <h2>Acknowledgements</h2>
      <p>
        PlasmoCount has been developed with support from across the malaria
        research community (see the primary paper). Development has been led
        by Mira Davidson, David Novotny and Clare Andradi-Brown. PlasmoCount
        has been made possible via funding from the Bill & Melinda Gates Foundation (OPP1181199)
        the RoseTrees Trust (PGS21/10035) with additional support coming from Wellcome (100993/Z/13/Z).
      </p>
    </div>
  );
};

export default About;
