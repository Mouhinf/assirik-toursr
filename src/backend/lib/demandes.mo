import List "mo:core/List";
import Time "mo:core/Time";
import Types "../types/demandes";
import Common "../types/common";

module {
  public type DemandeList = List.List<Types.DemandeBase>;

  public func create(
    list : DemandeList,
    nextId : Nat,
    input : Types.DemandeInput,
    departement : Text,
  ) : Types.DemandeBase {
    let demande : Types.DemandeBase = {
      id = nextId;
      nom = input.nom;
      email = input.email;
      telephone = input.telephone;
      message = input.message;
      departement = departement;
      date = Time.now();
      statut = "nouveau";
    };
    list.add(demande);
    demande;
  };

  public func getAll(list : DemandeList) : [Types.DemandeBase] {
    list.toArray();
  };

  public func updateStatut(
    list : DemandeList,
    id : Common.RecordId,
    statut : Common.Statut,
  ) : Bool {
    var found = false;
    list.mapInPlace(
      func(item) {
        if (item.id == id) {
          found := true;
          { item with statut = statut };
        } else {
          item;
        };
      }
    );
    found;
  };
};
