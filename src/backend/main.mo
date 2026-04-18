import List "mo:core/List";
import AccessControl "mo:caffeineai-authorization/access-control";
import MixinAuthorization "mo:caffeineai-authorization/MixinAuthorization";
import Types "types/demandes";
import DemandesMixin "mixins/demandes-api";

actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  let demandesVoyages = List.empty<Types.DemandeBase>();
  let demandesImmobilier = List.empty<Types.DemandeBase>();
  let demandesNettoiement = List.empty<Types.DemandeBase>();
  let contacts = List.empty<Types.DemandeBase>();
  var nextIdValue : Nat = 0;
  let nextId = { var value = nextIdValue };

  include DemandesMixin(
    accessControlState,
    demandesVoyages,
    demandesImmobilier,
    demandesNettoiement,
    contacts,
    nextId,
  );
};
