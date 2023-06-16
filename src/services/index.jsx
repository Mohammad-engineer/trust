import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteUserFn, getAllUsersFn, postUserFn, updateUserFn } from "../api";


export const useGetUsers = () => {
    const { data: users, isLoading, isError, error } = useQuery({
        queryKey: ['users'],
        queryFn: ({ signal }) => getAllUsersFn(signal),
        select: (res) => res
    })

    return { users, isLoading, isError, error }
}

export const usePostUser = () => {
    const queryClient = useQueryClient()
    const {
        isLoading: isCreating,
        isSuccess: isSuccessCreating,
        isError: isErrorCreating,
        error: errorCreateing,
        mutate: CreateUser
    } = useMutation(
        (data) => postUserFn(data),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['users'])
            }
        }
    )

    return {
        isCreating,
        isSuccessCreating,
        isErrorCreating,
        errorCreateing,
        CreateUser
    }
}

export const useUpdateUser = () => {
    const queryClient = useQueryClient()
    const {
        isLoading: isUpdating,
        isSuccess: isSuccessUpdating,
        isError: isErrorUpdating,
        error: errorUpdating,
        mutate: UpdateUser
    } = useMutation(
        ({ id, data }) => updateUserFn({ id, data }),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['users'])
            }
        }
    )

    return {
        isUpdating,
        isSuccessUpdating,
        isErrorUpdating,
        errorUpdating,
        UpdateUser
    }
}

export const useDeleteUser = () => {
    const queryClient = useQueryClient()
    const {
        isLoading: isDeleting,
        isSuccess: isSuccessDeleting,
        isError: isErrorDeleting,
        error: errorDeleting,
        mutate: DeleteUser
    } = useMutation(
        (id) => deleteUserFn(id),
        {
            onSuccess: () => {
                queryClient.invalidateQueries(['users'])
            }
        }
    )

    return {
        isDeleting,
        isSuccessDeleting,
        isErrorDeleting,
        errorDeleting,
        DeleteUser
    }
}