INSERT INTO [dbo].[application] (
        [Description],
        [IdClient],
        [IdUser],
        [IdStatus],
        [IdStatusPayment],
        [IdType],
        [Date],
        [Name],
        [Activity],
        [IdStaff],
        [IdPricing]
    )
VALUES (
    @Description,
    @IdClient,
    @IdUser,
    @IdStatus,
    @IdStatusPayment,
    @IdType,
    CURRENT_TIMESTAMP,
    @Name,
    @Activity,
    @IdStaff,
    @IdPricing
)