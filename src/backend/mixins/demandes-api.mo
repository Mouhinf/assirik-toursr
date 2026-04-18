import List "mo:core/List";
import Runtime "mo:core/Runtime";
import AccessControl "mo:caffeineai-authorization/access-control";
import Types "../types/demandes";
import Common "../types/common";
import DemandesLib "../lib/demandes";

mixin (
  accessControlState : AccessControl.AccessControlState,
  demandesVoyages : List.List<Types.DemandeBase>,
  demandesImmobilier : List.List<Types.DemandeBase>,
  demandesNettoiement : List.List<Types.DemandeBase>,
  contacts : List.List<Types.DemandeBase>,
  nextId : { var value : Nat },
) {
  // Public write — no auth required
  public shared func submitVoyage(input : Types.DemandeInput) : async Common.RecordId {
    let id = nextId.value;
    nextId.value += 1;
    let d = DemandesLib.create(demandesVoyages, id, input, "voyages");
    d.id;
  };

  public shared func submitImmobilier(input : Types.DemandeInput) : async Common.RecordId {
    let id = nextId.value;
    nextId.value += 1;
    let d = DemandesLib.create(demandesImmobilier, id, input, "immobilier");
    d.id;
  };

  public shared func submitNettoiement(input : Types.DemandeInput) : async Common.RecordId {
    let id = nextId.value;
    nextId.value += 1;
    let d = DemandesLib.create(demandesNettoiement, id, input, "nettoiement");
    d.id;
  };

  public shared func submitContact(input : Types.DemandeInput) : async Common.RecordId {
    let id = nextId.value;
    nextId.value += 1;
    let d = DemandesLib.create(contacts, id, input, "contact");
    d.id;
  };

  // Admin read — requires Internet Identity with admin role
  public query ({ caller }) func getDemandesVoyages() : async [Types.DemandeBase] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: admin uniquement");
    };
    DemandesLib.getAll(demandesVoyages);
  };

  public query ({ caller }) func getDemandesImmobilier() : async [Types.DemandeBase] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: admin uniquement");
    };
    DemandesLib.getAll(demandesImmobilier);
  };

  public query ({ caller }) func getDemandesNettoiement() : async [Types.DemandeBase] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: admin uniquement");
    };
    DemandesLib.getAll(demandesNettoiement);
  };

  public query ({ caller }) func getContacts() : async [Types.DemandeBase] {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: admin uniquement");
    };
    DemandesLib.getAll(contacts);
  };

  // Admin update — mark as treated
  public shared ({ caller }) func updateStatut(
    collectionName : Text,
    id : Common.RecordId,
    statut : Common.Statut,
  ) : async Bool {
    if (not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: admin uniquement");
    };
    if (collectionName == "voyages") {
      DemandesLib.updateStatut(demandesVoyages, id, statut);
    } else if (collectionName == "immobilier") {
      DemandesLib.updateStatut(demandesImmobilier, id, statut);
    } else if (collectionName == "nettoiement") {
      DemandesLib.updateStatut(demandesNettoiement, id, statut);
    } else if (collectionName == "contact") {
      DemandesLib.updateStatut(contacts, id, statut);
    } else {
      false;
    };
  };

  // Auth check — readable by anyone
  public query ({ caller }) func isAdmin() : async Bool {
    AccessControl.isAdmin(accessControlState, caller);
  };
};
