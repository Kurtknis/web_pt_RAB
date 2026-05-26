type MonitoringContext = Record<string, unknown>;

const isProduction = process.env.NODE_ENV === "production";
const debugEnabled = process.env.NEXT_PUBLIC_DEBUG_OBSERVABILITY === "true";
const clientSentryEnabled = Boolean(process.env.NEXT_PUBLIC_SENTRY_DSN);
const serverSentryEnabled = Boolean(process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN);

function safeLog(level: "error" | "warn", message: string, context?: MonitoringContext) {
  if (isProduction || !debugEnabled) return;
  const payload = context ? [message, context] : [message];
  console[level](...payload);
}

export function initializeMonitoring() {
  safeLog("warn", "Monitoring initialized in debug mode.", { service: "monitoring" });
}

export function reportClientError(error: Error, context?: MonitoringContext) {
  if (clientSentryEnabled) {
    import("@sentry/nextjs")
      .then((Sentry) => Sentry.captureException(error, { extra: context }))
      .catch(() => undefined);
  }

  safeLog("error", error.message, {
    stack: error.stack,
    ...context,
  });
}

export function reportServerError(error: unknown, context?: MonitoringContext) {
  if (serverSentryEnabled) {
    import("@sentry/nextjs")
      .then((Sentry) => Sentry.captureException(error, { extra: context }))
      .catch(() => undefined);
  }

  const message = error instanceof Error ? error.message : "Unknown server error";
  safeLog("error", message, context);
}
