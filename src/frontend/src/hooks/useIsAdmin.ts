import { useActor, useInternetIdentity } from "@caffeineai/core-infrastructure";
import { useQuery } from "@tanstack/react-query";
import { createActor } from "../backend";

export function useIsAdmin() {
  const { actor, isFetching } = useActor(createActor);
  const { isAuthenticated } = useInternetIdentity();

  const { data: isAdmin = false, isLoading } = useQuery({
    queryKey: ["isAdmin", isAuthenticated],
    queryFn: async () => {
      if (!actor || !isAuthenticated) return false;
      return actor.isAdmin();
    },
    enabled: !!actor && !isFetching && isAuthenticated,
  });

  return { isAdmin, isLoading, isAuthenticated };
}
