import Common "common";

module {
  public type DemandeBase = {
    id : Common.RecordId;
    nom : Text;
    email : Text;
    telephone : Text;
    message : Text;
    departement : Text;
    date : Common.Timestamp;
    statut : Common.Statut;
  };

  public type DemandeInput = {
    nom : Text;
    email : Text;
    telephone : Text;
    message : Text;
  };

  public type DemandeVoyage = DemandeBase;
  public type DemandeImmobilier = DemandeBase;
  public type DemandeNettoiement = DemandeBase;
  public type Contact = DemandeBase;
};
