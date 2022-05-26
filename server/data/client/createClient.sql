INSERT INTO [dbo].[client]
    (
        [Surname],
        [Name],
        [Patronymic],
        [Photo],
        [Mail],
        [Password],
        [RegistrationDate]
    )
VALUES (
    @Surname,
    @Name,
    @Patronymic,
    @Photo,
    @Mail,
    @Password,
    CURRENT_TIMESTAMP
)

SELECT MAX(IdClient) as "IdClient" FROM [dbo].[client]