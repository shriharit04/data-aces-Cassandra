FROM cassandra:latest

# Set environment variables
ENV JMX_EXPORTER_VERSION=1.3.0
ENV JMX_EXPORTER_HOME=/opt/jmx_exporter



# Create directory for JMX Exporter
RUN mkdir -p ${JMX_EXPORTER_HOME}
# RUN touch ${JMX_EXPORTER_HOME}/cassandra.yaml
COPY ./cassandra.yml ${JMX_EXPORTER_HOME}/cassandra.yaml


# Download JMX Exporter JAR
RUN curl -L -o ${JMX_EXPORTER_HOME}/jmx_prometheus_javaagent.jar \
    https://github.com/prometheus/jmx_exporter/releases/download/${JMX_EXPORTER_VERSION}/jmx_prometheus_javaagent-${JMX_EXPORTER_VERSION}.jar
# CMD ["java", \
#      "-javaagent:/opt/jmx_exporter/jmx_prometheus_javaagent-1.3.0.jar=/opt/jmx_exporter/cassandra.yaml", \
#      "-jar", "${JMX_EXPORTER_HOME}/jmx_prometheus_javaagent.jar"]
ENV JVM_EXTRA_OPTS="-javaagent:${JMX_EXPORTER_HOME}/jmx_prometheus_javaagent.jar=7071:${JMX_EXPORTER_HOME}/cassandra.yaml"

