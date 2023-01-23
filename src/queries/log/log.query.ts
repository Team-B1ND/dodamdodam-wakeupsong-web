import { useMutation } from "react-query";
import logRepository from "../../repository/log/log.repository";
import { postModuleLogParam } from "../../repository/log/log.param";

export const usePostModuleLog = () => {
  const mutation = useMutation(
    ({ description, moduleName }: postModuleLogParam) =>
      logRepository.postModuleLog({ description, moduleName })
  );

  return mutation;
};
