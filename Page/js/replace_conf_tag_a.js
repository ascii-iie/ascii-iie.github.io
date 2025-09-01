
document.addEventListener("DOMContentLoaded", function () {
  const tagConfigs = [
    {
      level: "CCF-B",
      colorClass: "text-bg-warning",
      confs: ["CIKM2020", "COLING2024", "COLING2023", "COLING2022", "ECAI2025", "ECAI2023", "ECML2025", "ECML2021","EMNLP2025",
              "EMNLP2023", "EMNLP2022", "EMNLP2021", "EMNLP2020", "ICASSP2024", "ICASSP2022", "ICASSP2021",
              "ICDM2024", "ICDM2022", "ICDM2021", "ICDM2020", "ICDM2019", "ICME2019", "NAACL2024", "PR2022", "TNNLS2022", "WSDM2024", "WSDM2021",
              "WWWJ2024", "WWWJ2023", "WWWJ2022", "WWWJ2020"]
    },
    {
      level: "CCF-A",
      colorClass: "text-bg-danger",
      confs: ["AAAI2025", "AAAI2023", "AAAI2022", "AAAI2021", "AAAI2020",
              "ACL2025", "ACL2024", "ACL2023", "ACL2022", "ACL2021",
              "ICML2024", "KDD2025", "SIGIR2024", "SIGIR2022", "TKDE2023", "TOIS2025", "TOIS2023",
              "WWW2025", "WWW2024", "WWW2023", "WWW2022", "WWW2021", "WWW2020", "WWW2019"]
    },
    {
      level: "CCF-C",
      colorClass: "text-bg-info",
      confs: ["IJCNN2021", "NLPCC2025", "NLPCC2023", "PAKDD2020", "KSEM2018"]
    },
    {
        level: "CCF-None",
        colorClass: "text-bg-secondary",
        confs: ["NCAA2019"]
    }
  ];

  const aTags = document.querySelectorAll("a");

  aTags.forEach(a => {
    let html = a.innerHTML;

    tagConfigs.forEach(cfg => {
      cfg.confs.forEach(conf => {
        const regex = new RegExp(`${conf}:`, "g");
        html = html.replace(regex, 
          `<span class="badge text-bg-success">${conf}</span> <span class="badge ${cfg.colorClass} rounded-pill">${cfg.level}</span>`);
      });
    });

    a.innerHTML = html;
  });
});
