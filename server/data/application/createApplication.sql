INSERT INTO [dbo].[application]
    (
        [Name],
        [Description],
        [IdClient],
        [IdUser]
    )
VALUES (
    @Name,
    @Description,
    @IdClient,
    @IdUser
)