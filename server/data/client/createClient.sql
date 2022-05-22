INSERT INTO [dbo].[client]
    (
        [Surname],
        [Name],
        [Patronymic],
        [Photo],
        [Mail],
        [Password],
        [RegistrationDate],
        [IdStatusDelete]
    )
VALUES (
    @Surname,
    @Name,
    @Patronymic,
    @Photo,
    @Mail,
    @Password,
    @RegistrationDate,
    @IdStatusDelete
)