INSERT INTO [dbo].[application] (
        [Description],
        [IdClient],
        [IdUser],
        [IdStatus],
        [IdStatusPayment],
        [IdType],
        [Date]
    )
VALUES (
    @Description,
    @IdClient,
    @IdUser,
    @IdStatus,
    @IdStatusPayment,
    @IdType,
    CURRENT_TIMESTAMP
)